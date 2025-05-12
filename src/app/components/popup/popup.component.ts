import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

  @Input() isOpen!: boolean;

  requestClosePopup() {

  }

}
