import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notificationCount$ = signal<number>(5);

  readOneNotification() {
    this.notificationCount$.update(oldValue => {
      if (oldValue <= 0) return 0;
      return oldValue - 1;
    });
  }

}
