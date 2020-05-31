import { createAction, props } from '@ngrx/store';
import { LoginCredentialsInterface } from '../../model/loginCredentials.interface';
import { LoginTokenInterface } from '../../model/login-token.interface';
import { JWTInterface } from '../../model/jwt.interface';

export const login = createAction(
  '[Login] auth user',
  props<LoginCredentialsInterface>()
);

export const loginSuccess = createAction(
  '[Login] succeed login',
  props<JWTInterface>()
);
