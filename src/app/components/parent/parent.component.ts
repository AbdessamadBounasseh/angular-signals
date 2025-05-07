import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ContentComponent} from '../content/content.component';

@Component({
  selector: 'app-parent',
  imports: [
    SidebarComponent,
    ContentComponent
  ],
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}
