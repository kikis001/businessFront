import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '../interface/User';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private url: ConfigService) { }

  registerUser(userRegister: RegisterUser ): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(`${this.url}/users`, userRegister)
  }

  loginUser(userLogin: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.url}/auth/login`, userLogin)
  }
}
