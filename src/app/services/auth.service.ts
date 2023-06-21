import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signin(user: any) {
    return this.http.post('http://localhost:8080/api/signin', user).pipe(
      catchError((error) => {
        alert('Tài Khoản mật khẩu không chính xác');
        return throwError(error);
      })
    );
  }
  signup(user: any) {
    return this.http.post('http://localhost:8080/api/signup', user).pipe(
      catchError((error) => {
        if (error.status === 400) {
          alert('Email đã tồn tại');
        }
        return throwError(error);
      })
    );
  }

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:8080/api/user`);
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`http://localhost:8080/api/user/${id}`);
  }
  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`http://localhost:8080/api/user/${user._id}`, user);
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }


}
