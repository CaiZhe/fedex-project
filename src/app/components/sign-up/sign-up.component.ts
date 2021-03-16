import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/custom-validators/custom-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
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

  constructor(private customValidators : CustomValidators) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.password);
    console.log(this.signUpForm);
  }
}
