import { AppStateInterface } from '../../model/app-state.interface';
import { initialLoginToken } from './login.token.state';

export const initialApp: AppStateInterface = {
  loginState: initialLoginToken
}
