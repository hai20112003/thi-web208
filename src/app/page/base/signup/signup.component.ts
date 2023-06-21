import { AuthService } from 'src/app/services/auth.service';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  formSignUp = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.checkPassword }
  );

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return null;
    } else {
      return { notMatch: true }; 
    }
  }
  onHandleSubmit() {
    if (this.formSignUp.valid) {
      this.authService.signup(this.formSignUp.value).subscribe((data) => {
        alert('Đăng Ký Thành Công !');
        this.router.navigate(['/login']);
      });
    }
  }
}
