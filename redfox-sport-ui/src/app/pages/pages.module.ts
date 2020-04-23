import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FootballModule } from '../football/football.module';
import { NbButtonModule } from '@nebular/theme';
import { FootballLeaguePageComponent } from './football-league-page/football-league-page.component';
import { FootballHomePageComponent } from './football-home-page/football-home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    FootballLeaguePageComponent, 
    FootballHomePageComponent
  ],
  imports: [
    CommonModule,
    FootballModule,
    NbButtonModule
  ]
})
export class PagesModule { }
