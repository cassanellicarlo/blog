import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  message: string;
  type: string;
 
  set(message: string, type:string) {
    this.message=message;
    this.type="alert alert-"+type;
  }
 
  clear() {
    this.message = undefined;
    this.type = undefined;
  }
}
