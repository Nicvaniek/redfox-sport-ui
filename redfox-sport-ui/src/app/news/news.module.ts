import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopStoryComponent } from './components/top-story/top-story.component';



@NgModule({
  declarations: [TopStoryComponent],
  imports: [
    CommonModule
  ],
  exports: [TopStoryComponent]
})
export class NewsModule { }
