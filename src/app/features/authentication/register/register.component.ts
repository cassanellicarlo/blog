import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/core/models/token-payload';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private alertService:AlertService) { }

  ngOnInit() {
  }

  register(event) {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
      this.alertService.set("You are now registered","success");

    }, (err) => {
      console.error(err);
      this.alertService.set(err.error.message,"danger");
    });
  }

}
