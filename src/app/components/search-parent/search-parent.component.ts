import { Component } from '@angular/core';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-search-parent',
  standalone: true,
  imports: [SearchResultsComponent],
  templateUrl: './search-parent.component.html',
  styleUrl: './search-parent.component.css'
})
export class SearchParentComponent {
  keyword: string = '';

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
  }
}
