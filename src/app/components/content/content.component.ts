import {Component, inject} from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-content',
  imports: [

  ],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  private readonly notificationService = inject(NotificationService);

  markAsRead() {
    this.notificationService.readOneNotification();
  }
}
