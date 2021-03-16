import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class CustomValidators {
  public containsLowerUppercaseValidator(): ValidatorFn {
    return (formControl: AbstractControl) => {
      let regex = /(?=.*[a-z])(?=.*[A-Z])/g;
      if (regex.test(formControl.value)) {
        return null;
      } else {
        return { doesNotContainLowercaseAndUppercase: true };
      }
    };
  }

  public containsNameInPasswordValidator(): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const firstName = formGroup.get('firstName')!.value;
      const lastName = formGroup.get('lastName')!.value;
      const password = formGroup.get('password')!.value;

      if (!password) return null;

      if (firstName && password.toLowerCase().includes(firstName.toLowerCase())) {
        formGroup.get('password')?.setErrors({ passwordContainsName: true });
        return null;
      } else if (lastName && password.toLowerCase().includes(lastName.toLowerCase())) {
        formGroup.get('password')?.setErrors({ passwordContainsName: true });
        return null;
      } else {
        formGroup.get('password')?.setErrors(null);
        return null;
      }
    };
  }
}
