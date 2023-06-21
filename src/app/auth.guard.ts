import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo = this.authService.isAuthenticated();

    if (userInfo?.user?.role === 'admin') {
      return true;
    } else if(userInfo?.user?.role === 'member'){
      this.router.navigate(['/home']);
      return false;
    } else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
