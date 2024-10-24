export interface IUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  address?: string;
  subscribedId?: string;
  status: string;
  roles: string[] | string;
  createdAt?: Date;
  updatedAt?: Date;
}

class UserService {}

const userService = new UserService()
export default userService