import { JWTInterface } from './jwt.interface';

export interface LoginTokenInterface extends JWTInterface {
  user?: {
    avatar: string,
    fullName: string
  }
}
