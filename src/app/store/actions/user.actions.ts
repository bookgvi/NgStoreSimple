import { Action } from '@ngrx/store';
import { IUser } from '../../model/user.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get users success',
  GetUser = '[User] get user',
  GetUserSuccess = '[User] get user success'
}

export class GetUsers implements Action {
  public readonly type: string = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type: string = EUserActions.GetUsersSuccess;

  constructor(public payload: IUser[]) {
  }
}

export class GetUser implements Action {
  public readonly type: string = EUserActions.GetUser;

  constructor(public payload: IUser) {
  }
}

export class GetUserSuccess implements Action {
  public readonly type: string = EUserActions.GetUserSuccess;

  constructor(public payload: IUser) {
  }
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
