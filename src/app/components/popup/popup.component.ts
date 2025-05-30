import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @Input() isOpen!: boolean;

  @Output() needToClose = new EventEmitter<boolean>(false);

  requestClosePopup() {
    this.needToClose.emit(true);
  }

}
