import { createSelector } from '@ngrx/store';
import { LoginTokenInterface } from '../../model/login-token.interface';
import { JWTInterface } from '../../model/jwt.interface';

export const selectToken = createSelector(
  (state: JWTInterface) => state,
  (state: LoginTokenInterface) => ({ ...state })
);
