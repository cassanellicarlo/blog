import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SpinnerComponent, AlertComponent, ButtonComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    ButtonComponent,
    ModalComponent
  ]
})
export class SharedModule { }
