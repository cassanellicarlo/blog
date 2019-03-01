import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [SpinnerComponent, AlertComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
