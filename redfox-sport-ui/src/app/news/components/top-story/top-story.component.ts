import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-top-story',
  templateUrl: './top-story.component.html',
  styleUrls: ['./top-story.component.scss']
})
export class TopStoryComponent implements OnInit {

  @Input()
  public article: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
