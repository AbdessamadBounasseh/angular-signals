import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  allNotificationCount$ = new Subject<number>();

  singleNotificationCount$ = new Subject<void>();

}
