import { initialUserState, IUserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';

export const userReducer = (state: IUserState = initialUserState, action: UserActions): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action['payload']
      };
    }
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action['payload']
      };
    }
    default:
      return state;
  }
}
