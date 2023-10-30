import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, CountryISO } from 'ngx-intl-tel-input'; // Remove TooltipLabel

@Component({
  selector: 'app-phone-authentication',
  templateUrl: './phone-authentication.component.html',
  styleUrls: ['./phone-authentication.component.scss']
})
export class PhoneAuthenticationComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  // phoneFormControl = new FormControl(null, [Validators.required]);
  hidePassword = true;
  errorMessage = ''; // Declare the errorMessage property here

  // Add these properties for the phone input field
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  phoneFormControl = new FormControl(undefined, [Validators.required]); // Add this line

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  togglePasswordVisibility(input: any): void {
    input.type = this.hidePassword ? 'text' : 'password';
    this.hidePassword = !this.hidePassword;
  }

  onLoginButtonClick(): void {
    // Check if any input field is invalid
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid || this.phoneFormControl.invalid) { // Add phoneFormControl to the check
      this.errorMessage = 'Please enter valid data in all fields.';
      return;
    }

    // Continue with login logic
    this.errorMessage = ''; // Clear any previous error message
    // Your login logic here...
  }
}
