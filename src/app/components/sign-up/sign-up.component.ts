import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { containsLowerUppercaseValidator } from 'src/app/custom-validators/contains-lower-uppercase.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), containsLowerUppercaseValidator])
  });

  get firstName() { return this.signUpForm.get('firstName'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }

  constructor() { }
 
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.password);
  }

}
