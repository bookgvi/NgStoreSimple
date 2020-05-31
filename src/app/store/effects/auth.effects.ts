import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthRepository } from '../../services/auth.repository';
import { Action } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { exhaustMap, tap, map } from 'rxjs/operators';
import { JWTInterface } from '../../model/jwt.interface';

@Injectable()
export class AuthEffects {
  public login = createEffect(() => this.actions.pipe(
    ofType(AuthActions.login),
    exhaustMap(action => this.auth.login(action)
      .pipe(
        map(({ data }) => AuthActions.loginSuccess(<JWTInterface>data))
      )
    )
  ));

  constructor(
    private auth: AuthRepository,
    private actions: Actions
  ) {
  }
}
