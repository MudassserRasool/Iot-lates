import { Component, ViewChild } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';
@Component({
  selector: 'app-phone-otp',
  templateUrl: './phone-otp.component.html',
  styleUrls: ['./phone-otp.component.scss']
})
export class PhoneOtpComponent{
  @ViewChild(NgOtpInputComponent) ngOtpInput!: NgOtpInputComponent;
  config = {
    allowNumbersOnly: true,
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '*',
    inputStyles: {
      width: '62px',
      height: '44px'
    }
  };

  onOtpChange(otp: any) {
    // Your logic here...
  }

  setValue() {
    this.ngOtpInput.setValue('12345'); // Set value for OTP input
  }
}