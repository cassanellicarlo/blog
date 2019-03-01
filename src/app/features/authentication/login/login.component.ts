import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/core/models/token-payload';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  login(event) {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
      this.alertService.set("You are now logged in!","success");
    }, (err) => {
      console.error(err);
      this.alertService.set(err.error.message,"danger");
    });
  }
}
