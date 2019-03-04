import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title: string;
  @Input() content: string;
  @Input() id: string;
  @Output() onConfirm = new EventEmitter<any>();
  
  onClickConfirm(event) {
    this.onConfirm.emit(event);
  }

}
