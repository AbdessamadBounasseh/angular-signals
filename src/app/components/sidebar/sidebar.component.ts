import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, OnDestroy {

  notificationCount: number = 5;

  notificationService = inject(NotificationService);

  ngOnInit(): void {
    this.notificationService.allNotificationCount$.subscribe((count) => {
      this.notificationCount = count;
    })

    this.notificationService.singleNotificationCount$.subscribe(() => {
      this.notificationCount--;
    })
  }

  ngOnDestroy() {
    console.log('I am destroyed');
  }
}
