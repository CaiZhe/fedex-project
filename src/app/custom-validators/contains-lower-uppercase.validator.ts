import { FormControl } from '@angular/forms';

export function containsLowerUppercaseValidator(c: FormControl) {
  let regex = /(?=.*[a-z])(?=.*[A-Z])/g;
  if (regex.test(c.value)) {
    return null;
  } else {
    return { doesNotContainLowercaseAndUppercase: true };
  }
}
