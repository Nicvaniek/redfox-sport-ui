import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule } from '@nebular/theme';
import { FootballMatchCardComponent } from './components/football-match-card/football-match-card.component';



@NgModule({
  declarations: [FootballMatchCardComponent],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [FootballMatchCardComponent]
})
export class FootballModule { }
