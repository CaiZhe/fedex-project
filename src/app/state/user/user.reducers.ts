import { createReducer, on } from '@ngrx/store';
import { User, UserResponseData } from 'src/app/models/user.model';
import * as UserActions from './user.actions';

export interface UserState {
  user: User | null;
  error: {
    statusCode?: number;
    message?: string;
  } | null;
  payload: UserResponseData | null;
}

export const initialState: UserState = {
  user: null,
  error: null,
  payload: null,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.signUp, (state) => {
    return {
      ...state,
      isLoadingUser: true,
    };
  }),
  on(UserActions.signUpSuccess, (state: any, { payload }) => {
    return {
      ...state,
      isLoadingUser: true,
      user: payload?.data?.user,
      payload: payload?.data?.user,
      error: null,
    };
  }),
  on(UserActions.signUpFailure, (state: any, { payload }) => {
    return {
      ...state,
      isLoadingUser: true,
      error: payload,
    };
  })
);
