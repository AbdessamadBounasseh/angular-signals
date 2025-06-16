import {Component, input} from '@angular/core';

@Component({
  selector: 'app-search-card',
  standalone: true,
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  productName = input.required({
    alias: 'product',
    transform: (name: string) => name.trim()
  });
}
