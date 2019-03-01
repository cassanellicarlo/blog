import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  token: string;

  constructor() { }

  // Save Token in Local Storage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  // Get Token from Local Storage
  getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  // Delete Token from Local Storage
  deleteToken(){
    this.token = '';
    window.localStorage.removeItem('token');
  }


}
