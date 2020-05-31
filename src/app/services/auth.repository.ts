import { Injectable } from '@angular/core';
import { AuthDataSource } from './auth.dataSource';
import { Observable } from 'rxjs';
import { LoginTokenInterface } from '../model/login-token.interface';

@Injectable()
export class AuthRepository {
  constructor(private auth: AuthDataSource) {
  }

  public login(login: string, password: string): Observable<LoginTokenInterface> {
    return this.auth.login(login, password);
  }
}
