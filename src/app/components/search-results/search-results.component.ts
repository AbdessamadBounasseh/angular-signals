import {Component, computed, input, signal} from '@angular/core';
import {SearchCardComponent} from '../search-card/search-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [SearchCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  keyword = input('', {
    alias: 'toFilterBy',
    transform: (value: string) => value.trim().toLowerCase()
  });

  results = computed(() => this.products()
    .map(p => p.toLowerCase())
    .filter(p => p.includes(this.keyword()))
  )

  products = signal<string[]>([
    'iPhone 15 Pro',
    'MacBook Air M2',
    'iPad Pro',
    'Apple Watch Series 9',
    'AirPods Pro',
    'Mac Studio'
  ])
}
