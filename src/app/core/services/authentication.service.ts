import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDetails } from '../models/user-details';
import { TokenPayload } from '../models/token-payload';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/token-response';
import { map } from 'rxjs/operators';
import { APIService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private api: APIService, private jwt:JwtService) {}


  // Get User Details (id, email, name, exp, iat)
  public getUserDetails(): UserDetails {
    const token = this.jwt.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1]; // Get the payload part of JWT string
      payload = window.atob(payload); // Decode the Base64 string payload
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  // Check if user is logged in (checks the expiration hasn’t passed yet)
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Registration
  public register(user: TokenPayload): Observable<any> {
    return this.api.request('post', 'register', user);
  }
  
  // Login
  public login(user: TokenPayload): Observable<any> {
    return this.api.request('post', 'login', user);
  }

  // Logout
  public logout(): void {
    this.jwt.deleteToken();
    this.router.navigateByUrl('/');
  }
  
  // Profile
  public profile(): Observable<any> {
    return this.api.request('get', 'profile');
  }

  
}
