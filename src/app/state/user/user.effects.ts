import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
} from 'rxjs/operators';
import { UserActionTypes } from './user.actions';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private authservice: AuthService,
    private actions$: Actions,
  ) {}

  signUpUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.SIGN_UP_USER),
      mergeMap((action: Action) =>
        this.authservice.postSignUpForm(action).pipe(
          map((data) => ({
            type: UserActionTypes.SIGN_UP_USER_SUCCESS,
            payload: data,
          })),
          catchError((error) =>
            of({ type: UserActionTypes.SIGN_UP_USER_FAILURE, payload: error })
          )
        )
      )
    ) as Observable<Action>
  );
}
