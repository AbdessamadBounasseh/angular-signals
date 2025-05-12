import {Component, inject} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-content',
  imports: [
    PopupComponent
  ],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly notificationService = inject(NotificationService);

  isOpen = false;

  markAsRead() {
    this.notificationService.readOneNotification();
  }

  openPopup() {
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }
}
