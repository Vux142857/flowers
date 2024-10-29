import jwt from 'jsonwebtoken'

export interface IJwtPayload {
  sub: string
  email: string
  roles: string
  status: string
  iat: number
  exp: number
  aud: string
  iss: string
}

export const verifyToken = ({ token, secretKey }: { token: string, secretKey: string }) => {
  return new Promise<IJwtPayload>((resolve, rejects) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        throw rejects(error)
      }
      resolve(decoded as IJwtPayload)
    })
  })
}