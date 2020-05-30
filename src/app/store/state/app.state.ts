import { initialUserState, IUserState } from './user.state';
import { IConfigState, initialConfigState } from './config.state';

export interface IAppState {
  users: IUserState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return this.initalAppState;
}
