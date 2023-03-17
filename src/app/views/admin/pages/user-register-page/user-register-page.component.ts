import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.css'],
})
export class UserRegisterPageComponent {
  passwordsCheck = false;

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      userPasswordCheck: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  signUp() {
    if (this.registerForm.valid) {
      if (
        this.registerForm.get('userPassword')?.value ==
        this.registerForm.get('userPasswordCheck')?.value
      ) {
        console.log(this.registerForm.value);
      } else {
        alert('Şifreler birbiri ile aynı olmak zorundadır !')
      }
    } else {
      alert('Girdiğiniz Bilgileri Kontrol Ediniz');
    }
  }

  checkErrorExist(formControlName: string) {
    return (
      this.registerForm.get(formControlName)?.touched &&
      this.registerForm.get(formControlName)?.invalid
    );
  }

  getErrors(formControlName: string): string[] {
    let errors: string[] = [];

    if (this.registerForm.get(formControlName)?.errors) {
      if (this.registerForm.get(formControlName)?.errors?.['required']) {
        errors.push('Bu alanı doldurmak zorundasınız !');
      }
      if (this.registerForm.get(formControlName)?.errors?.['minlength']) {
        errors.push('Bu alan 6 karakterden büyük olmak zorundadır !');
      }
    }

    return errors;
  }

  checkIsValid(formControlName: string): string {
    if (
      (this.registerForm.get(formControlName)?.touched ||
        this.registerForm.get(formControlName)?.dirty) &&
      this.registerForm.get(formControlName)?.invalid
    )
      return 'invalid';
    if (
      (this.registerForm.get(formControlName)?.touched ||
        this.registerForm.get(formControlName)?.dirty) &&
      this.registerForm.get(formControlName)?.valid
    )
      return 'valid';

    // if(this.registerForm.get(formControlName)?.untouched)
    return '';
  }
  checkPasswordsValid() {
    if (
      (this.registerForm.get('userPassword')?.touched ||
        this.registerForm.get('userPassword')?.dirty) &&
      this.registerForm.get('userPassword')?.valid
    ) {
      if (
        (this.registerForm.get('userPasswordCheck')?.touched ||
          this.registerForm.get('userPasswordCheck')?.dirty) &&
        this.registerForm.get('userPasswordCheck')?.valid
      ) {
        if (
          this.registerForm.get('userPassword')?.value !=
          this.registerForm.get('userPasswordCheck')?.value
        ) {
          return 'invalid';
        } else if (
          this.registerForm.get('userPassword')?.value ==
          this.registerForm.get('userPasswordCheck')?.value
        ) {
          this.passwordsCheck = true;
          return 'valid';
        }
      }
    }
    return '';
  }
}
