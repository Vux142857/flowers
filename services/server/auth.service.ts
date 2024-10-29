import fetcher from "@/lib/fetcher";

const SERVER = process.env.NEXT_PUBLIC_SERVER as string

export interface RegisterReqBody {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
  address?: string;
}

export interface LoginReqBody {
  email: string
  password: string
}

class AuthService {

  async register(payload: RegisterReqBody) {
    return await fetcher.post(`${SERVER}/auth/sign-up`, payload)
  }
  
  async login(payload: LoginReqBody) {
    return await fetcher.post(`${SERVER}/auth/sign-in`, payload)
  }

  async refreshToken(refreshToken: string) {
    return await fetcher.post(`${SERVER}/auth/refresh-token`, { refresh_token: refreshToken })
}
}

const authService = new AuthService()
export default authService