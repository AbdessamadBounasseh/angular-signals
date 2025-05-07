import {Component, inject} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private readonly notificationService = inject(NotificationService);

  notificationCount = this.notificationService.notificationCount$;

}
