import { Component, OnInit } from '@angular/core';
import { LoginTokenInterface } from './model/login-token.interface';
import { select, Store } from '@ngrx/store';
import * as AuthActions from './store/actions/auth.actions';
import { pipe } from 'rxjs';
import { selectToken } from './store/selectors/login.selectors';
import { AuthRepository } from './services/auth.repository';
import { LoginCredentialsInterface } from './model/loginCredentials.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private loginCredentials: LoginCredentialsInterface = { login: 'artem', password: '123456' };

  constructor(
    private store: Store<LoginTokenInterface>,
    private auth: AuthRepository
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.login(this.loginCredentials));
  }

  public hClick(): void {
    this.store.select(state => state)
      .subscribe(data => {
        console.log(data);
      })
  }
}
