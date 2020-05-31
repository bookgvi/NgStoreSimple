import { createAction, props } from '@ngrx/store';
import { LoginCredentialsInterface } from '../../model/loginCredentials.interface';

export const login = createAction(
  '[login] auth user',
  props<LoginCredentialsInterface>()
);
