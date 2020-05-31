import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from './auth.reducer';
import { AppStateInterface } from '../../model/app-state.interface';

export const appReducer: ActionReducerMap<AppStateInterface, any> = {
  loginState: loginReducer
}
