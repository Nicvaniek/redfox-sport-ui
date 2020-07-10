import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FootballModule } from '../football/football.module';
import { NbButtonModule, NbCardModule, NbAlertModule } from '@nebular/theme';
import { FootballLeaguePageComponent } from './football-league-page/football-league-page.component';
import { FootballHomePageComponent } from './football-home-page/football-home-page.component';
import { NewsModule } from '../news/news.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [
    HomePageComponent,
    FootballLeaguePageComponent,
    FootballHomePageComponent
  ],
  imports: [
    CommonModule,
    FootballModule,
    NbButtonModule,
    NbCardModule,
    NewsModule,
    NgxUiLoaderModule,
    NbAlertModule
  ]
})
export class PagesModule { }
