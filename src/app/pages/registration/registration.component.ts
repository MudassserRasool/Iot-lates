import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  fullNameFormControl = new FormControl('', [Validators.required]);
  contactNumberFormControl = new FormControl(null, [Validators.required]);
  jobTitleFormControl = new FormControl('', [Validators.required]);
  departmentFormControl = new FormControl('', [Validators.required]);
  termsAndConditionsFormControl = new FormControl(false, [Validators.requiredTrue]);
  privacyPolicyFormControl = new FormControl(false, [Validators.requiredTrue]);

  hidePassword = true;
  errorMessage = '';
  // passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  passwordsDoNotMatch = false;
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8), // Adjust the minimum length as needed
    // Add other password validation rules here
  ]);
  
  comparePasswords(): void {
    const password = this.passwordFormControl.value;
    const confirmPassword = this.confirmPasswordFormControl.value;
  
    if (password !== confirmPassword) {
      this.confirmPasswordFormControl.setErrors({ passwordsDoNotMatch: true });
    } else {
      this.confirmPasswordFormControl.setErrors(null); // Clear the error when passwords match
    }
  }

  togglePasswordVisibility(input: any): void {
    input.type = this.hidePassword ? 'text' : 'password';
    this.hidePassword = !this.hidePassword;
  }

  // changePreferredCountries() {
  //   this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  // }

  onLoginButtonClick(): void {
    if (
      this.emailFormControl.invalid ||
      this.passwordFormControl.invalid ||
      this.confirmPasswordFormControl.invalid ||
      this.fullNameFormControl.invalid ||
      this.contactNumberFormControl.invalid ||
      this.jobTitleFormControl.invalid ||
      this.departmentFormControl.invalid ||
      this.termsAndConditionsFormControl.invalid ||
      this.privacyPolicyFormControl.invalid ||
      this.passwordsDoNotMatch
    ) {
      this.errorMessage = 'Please enter valid data in all fields.';
      return;
    }

    this.errorMessage = '';
    // Your login logic here...
  }

  isPasswordValid(validationRule: string): boolean {
    const passwordValue = this.passwordFormControl.value;
  
    // if (validationRule === 'minlength') {
    //   return !!passwordValue && passwordValue.length >= 8 && this.passwordFormControl.hasError('minlength');
    // }

    if (validationRule === 'hasNumber') {
      return !!passwordValue && /[0-9]/.test(passwordValue);
    }
    if (validationRule === 'hasCapitalCase') {
      return !!passwordValue && /[A-Z]/.test(passwordValue);
    }
    if (validationRule === 'hasSmallCase') {
      return !!passwordValue && /[a-z]/.test(passwordValue);
    }
    if (validationRule === 'hasSpecialCharacters') {
      return !!passwordValue && /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
    }
    return false;
  }
  
  isPasswordMinLengthValid(): boolean {
    const passwordValue = this.passwordFormControl.value;
    return !!passwordValue && passwordValue.length >= 8;
  }
  
  
}
