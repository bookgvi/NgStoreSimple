import { Component, OnInit } from '@angular/core';
import { LoginTokenInterface } from './model/login-token.interface';
import { select, Store } from '@ngrx/store';
import { login } from './store/actions/auth.actions';
import { pipe } from 'rxjs';
import { selectToken } from './store/selectors/login.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<LoginTokenInterface>) {
  }

  ngOnInit(): void {
    this.store.dispatch(login({ login: 'artem', password: '123456' }));
  }

  public hClick(): void {
    this.store.select(state => state.access_token)
      .subscribe(data => {
        console.log(data);
      })
  }
}
