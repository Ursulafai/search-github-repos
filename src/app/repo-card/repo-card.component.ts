import {Component, Input, OnInit} from '@angular/core';
import {IItem} from '../models/repos-card';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  @Input()
  public item: IItem;

  constructor() {
  }

  ngOnInit() {
  }

  public goToGitUrl(url: string): void {
    window.open(url, '_blank');
  }

}
