import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  constructor(public alertService: AlertService) { }

  ngOnInit() {
  }

}