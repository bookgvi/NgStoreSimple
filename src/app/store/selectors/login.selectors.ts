import { createSelector } from '@ngrx/store';
import { LoginTokenInterface } from '../../model/login-token.interface';

export const selectToken = createSelector(
  (state: LoginTokenInterface) => ({
    token_type: state.token_type,
    access_token: state.access_token,
    expires_at: state.expires_at
  }),
  (state: LoginTokenInterface) => state
);
