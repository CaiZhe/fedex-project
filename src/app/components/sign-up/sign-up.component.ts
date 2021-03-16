import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomValidators } from 'src/app/shared/custom-validators';
import { UserActionTypes } from 'src/app/state/user/user.actions';
import * as UserSelectors from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  hasSubmittedForm = false;
  hasErrorOnSubmit = false;

  signUpForm = new FormGroup(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        this.customValidators.containsLowerUppercaseValidator(),
      ]),
    },
    {
      validators: [this.customValidators.containsNameInPasswordValidator()],
    }
  );

  get firstName(): AbstractControl | null {
    return this.signUpForm.get('firstName');
  }
  get lastName(): AbstractControl | null {
    return this.signUpForm.get('lastName');
  }
  get email(): AbstractControl | null {
    return this.signUpForm.get('email');
  }
  get password(): AbstractControl | null {
    return this.signUpForm.get('password');
  }

  constructor(
    private customValidators: CustomValidators,
    private store: Store
  ) {}

  ngOnInit(): void {}

  signupResult$: Observable<any> = this.store
    .select(UserSelectors.getSignUpResult)
    .pipe(
      map((data) => {
        this.isLoading$.next(false);

        if (data.error) {
          this.hasErrorOnSubmit = true;
          return data.error;
        }

        this.hasErrorOnSubmit = false;
        return { payload: true };
      })
    );

  onSubmit() {
    if (this.isLoading$.value || this.signUpForm.status !== 'VALID') return;

    this.isLoading$.next(true);
    this.hasSubmittedForm = true;

    // TODO: Encrypt password value
    this.store.dispatch({
      type: UserActionTypes.SIGN_UP_USER,
      payload: { user: this.signUpForm.value },
    });
  }
}
