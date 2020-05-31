import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginTokenInterface } from '../model/login-token.interface';
import { Observable } from 'rxjs';

@Injectable()
export class AuthDataSource {
  constructor(private http: HttpClient) {
  }

  public login(login: string, password: string): Observable<LoginTokenInterface> {
    return this.http.post('https://pre.ugoloc.ucann.ru/api/auth/login', { login, password });
  }
}
