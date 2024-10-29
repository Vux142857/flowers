import authService, { LoginReqBody, RegisterReqBody } from '@/services/server/auth.service';
import { verifyToken } from '@/services/server/jwt.service';
import { NextAuthOptions, Session, Token, User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider(
      {
        id: 'Sign In',
        name: 'credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials): Promise<User | null> {
          try {
            const { email, password } = credentials as LoginReqBody;
            const { accessToken, refreshToken } = await authService.login({ email, password });

            if (accessToken && refreshToken) {
              return await checkValidateAndSetUser(accessToken, refreshToken);
            }
          } catch (error) {
            console.error('Error during login:', error);
            return null;
          }
          return null;
        }
      },
    ),
    CredentialsProvider(
      {
        id: 'Sign Up',
        name: 'credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
          confirmPassword: { label: "Confirm Password", type: "password" },
          username: { label: "Username", type: "text" },
          firstName: { label: "First Name", type: "text" },
          lastName: { label: "Last Name", type: "text" },
          address: { label: "Address", type: "text" },
        },
        async authorize(credentials): Promise<User | null> {
          try {
            if (!credentials) {
              console.error('No credentials provided');
              return null;
            }
            const { email, password, confirmPassword, username, firstName, lastName, address } = credentials as {
              email: string;
              password: string;
              confirmPassword: string;
              username: string;
              firstName?: string;
              lastName?: string;
              address?: string;
            };
            if (password !== confirmPassword) {
              console.error('Passwords do not match');
              return null;
            }

            const { accessToken, refreshToken } = await authService.register({
              username,
              email,
              password,
              confirmPassword: confirmPassword,
              firstName,
              lastName,
              address,
            } as RegisterReqBody);
            if (accessToken && refreshToken) {
              return await checkValidateAndSetUser(accessToken, refreshToken);
            }

          } catch (error) {
            console.error('Error during registration:', error);
            return null;
          }
          return null;
        }
      },
    )
  ],
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: { token: any; user?: User }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.roles = user.roles;
        token.status = user.status;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expRT = user.expRT;
        token.expAT = user.expAT;
      }

      // If the token is already present, we can validate the expiration
      if (token && token.expAT && token.expAT > Date.now() / 1000) {
        return token;
      }

      // Refresh token logic here, if access token is expired
      return refreshAccessToken(token.refreshToken, token);
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: Session, token: any }) {
      session.user = {
        id: token.id,
        email: token.email,
        roles: token.roles,
        status: token.status,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expRT: token.expRT,
        expAT: token.expAT,
      };
      session.error = token?.error;
      return session;
    },
  }

}

// utilities
async function refreshAccessToken(refreshToken: string, token: Token): Promise<Token> {
  try {
    const refreshedTokens = await authService.refreshToken(refreshToken)
    if (!refreshedTokens) {
      return {
        ...token,
        error: "RefreshAccessTokenError",
      }
    }
    const [decodedRT, decodeAT] = await Promise.all([
      verifyToken(
        {
          token: refreshedTokens.refreshToken,
          secretKey: process.env.JWT_SECRET_REFRESH_TOKEN as string
        }),
      verifyToken(
        {
          token: refreshedTokens.accessToken,
          secretKey: process.env.JWT_SECRET_ACCESS_TOKEN as string
        })
    ])
    if (!decodedRT) {
      return {
        ...token,
        error: "RefreshAccessTokenError",
      }
    }
    const newToken = {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
      expRT: decodedRT.exp,
      expAT: decodeAT.exp
    }
    return newToken
  } catch (error) {
    console.log('Error refreshing access token:', error)
    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

const checkValidateAndSetUser = async (accessToken: string, refreshToken: string): Promise<User | null> => {
  const [decodedRT, decodedAT] = await Promise.all([
    verifyToken({
      token: refreshToken,
      secretKey: process.env.JWT_SECRET as string
    }),
    verifyToken({
      token: accessToken,
      secretKey: process.env.JWT_SECRET as string
    }),
  ]);

  if (decodedAT && decodedRT) {
    return {
      id: decodedAT.sub,
      email: decodedAT.email,
      accessToken: accessToken,
      refreshToken: refreshToken,
      roles: decodedAT.roles,
      status: decodedAT.status,
      expRT: decodedRT.exp,
      expAT: decodedAT.exp
    };
  } else {
    console.error('No authorization token found');
    return null;
  }
}