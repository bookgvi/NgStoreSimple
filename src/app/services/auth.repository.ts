import { Injectable } from '@angular/core';
import { AuthDataSource } from './auth.dataSource';
import { Observable } from 'rxjs';
import { LoginTokenInterface } from '../model/login-token.interface';
import { LoginCredentialsInterface } from '../model/loginCredentials.interface';

interface ResponseWithData extends LoginTokenInterface{
  data?: {
    LoginTokenInterface
  }
}
@Injectable()
export class AuthRepository {
  constructor(private auth: AuthDataSource) {
  }

  public login({ login, password }): Observable<ResponseWithData> {
    return this.auth.login(login, password);
  }
}
