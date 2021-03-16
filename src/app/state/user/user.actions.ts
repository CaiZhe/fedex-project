import { createAction, props } from '@ngrx/store';
import { User, UserResponseData } from 'src/app/models/user.model';

export enum UserActionTypes {
  SIGN_UP_USER = '[USER] Sign up',
  SIGN_UP_USER_SUCCESS = '[USER] Sign up success',
  SIGN_UP_USER_FAILURE = '[USER] Sign up failure',
}

export const signUp = createAction(
  UserActionTypes.SIGN_UP_USER,
  props<{ payload: User }>()
);

export const signUpSuccess = createAction(
  UserActionTypes.SIGN_UP_USER_SUCCESS,
  props<{ payload: UserResponseData }>()
);

export const signUpFailure = createAction(
  UserActionTypes.SIGN_UP_USER_FAILURE,
  props<{ payload: User[] }>()
);
