import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenPayload } from '../models/token-payload';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient, private jwt: JwtService) { }

  // Return HTTP request Observable
  public request(method: 'post'|'get', type: string, payload?: any): Observable<any> {
    let base;

    const options = { headers: { Authorization: `Bearer ${this.jwt.getToken()}` }};
  
    if (method === 'post') {
      base = this.http.post(`/api/${type}`, payload, options);
    } else {
      base = this.http.get(`/api/${type}`, options);
    }
  
    const request = base.pipe(
      map((data: any) => {
        if (data.token) {
          this.jwt.saveToken(data.token);
        }
        return data;
      })
    );
  
    return request;
  }


}
