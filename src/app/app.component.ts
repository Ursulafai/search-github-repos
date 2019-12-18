import {Component} from '@angular/core';
import {SearchService} from './search.service';
import {ICard} from './models/repos-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showLoader: boolean;
  value: string;
  public searchRepo: ICard;

  constructor(
    private searchService: SearchService) {
  }

  public search(keyword: string): void {
    this.showLoader = true;
    this.searchService.searchRepo(keyword).subscribe((response: ICard) => {
      this.searchRepo = response;
      this.showLoader = false;
    });
  }
}
