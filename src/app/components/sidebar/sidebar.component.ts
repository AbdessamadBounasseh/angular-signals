import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {RouterLink} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit, OnDestroy {

  private readonly notificationService = inject(NotificationService);

  notificationCount: number = 5;

  private allNotificationSubscription!: Subscription;
  private singleNotificationSubscription!: Subscription;

  ngOnInit(): void {
    this.allNotificationSubscription = this.notificationService.allNotificationCount$.subscribe((count) => {
      this.notificationCount = count;
    });

    this.singleNotificationSubscription = this.notificationService.singleNotificationCount$.subscribe(() => {
      this.notificationCount--;
    })
  }

  ngOnDestroy() {
    this.allNotificationSubscription.unsubscribe();
    this.singleNotificationSubscription.unsubscribe();
  }
}
