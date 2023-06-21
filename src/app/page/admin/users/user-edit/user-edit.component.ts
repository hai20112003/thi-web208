import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  users:IUser = {
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService:AuthService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.authService.getUserById(id).subscribe(
        (user: any) => {
          this.formUser.patchValue({
            _id: user.data._id,
          });
          this.formUser.patchValue({
            name: user.data.name,
          });
          this.formUser.patchValue({
            email: user.data.email,
          });
          this.formUser.patchValue({
            phone: user.data.phone,
          });
          this.formUser.patchValue({
            password: user.data.password,
          });
          this.formUser.patchValue({
            role: user.data.role,
          });
          this.users = user.data
        },
        (error) => console.log(error.message)
      );
    });
  }
  formUser = this.fb.group({
    _id: ['', [Validators.required]],
    name: [''],
    email: [''],
    phone: [''],
    password: [''],
    role: ['',[Validators.required]],
  });
  onHandleSubmit() {
    if (this.formUser.valid) {
      const user: IUser = {
        _id: this.formUser.get('_id')?.value || '',
        name: this.formUser.get('name')?.value || '',
        email: this.formUser.get('email')?.value || '',
        phone: this.formUser.get('phone')?.value || '',
        password: this.formUser.get('password')?.value || '',
        role: this.formUser.get('role')?.value || '',
      };
      this.authService.updateUser(user).subscribe((data) => {
        alert('Sửa vai trò thành công');
        this.router.navigate(['/admin/users']);
      });
    }
  }
}
