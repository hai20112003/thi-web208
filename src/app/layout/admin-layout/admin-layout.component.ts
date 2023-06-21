import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  constructor(private authService: AuthService, private router: Router) { }
  userInfo = this.authService.isAuthenticated();

  onHandleLogout(){
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
