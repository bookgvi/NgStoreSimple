import { Action, createReducer, on, State } from '@ngrx/store';
import * as AuthenticateActions from '../actions/auth.actions';
import { LoginTokenInterface } from '../../model/login-token.interface';
import { initialLoginToken } from '../state/login.token.state';

export const loginReducer = createReducer(
  initialLoginToken,
  on(AuthenticateActions.login, state => (
      {
        ...state,
        token_type: state.token_type,
        access_token: state.access_token,
        expires_at: state.expires_at
      }
    )
  )
);
