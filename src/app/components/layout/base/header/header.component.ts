import { CategoryService } from './../../../../services/category.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/Category';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  category: ICategory[] = [];

  constructor(
    private authService: AuthService,
    private CategoryService: CategoryService,
    private router: Router
  ) {
    this.CategoryService.getCategory().subscribe(
      (data: any) => {
        this.category = data.data;
      },
      (error) => console.log(error)
    );
  }

  userInfo = this.authService.isAuthenticated();

  onHandleLogout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
