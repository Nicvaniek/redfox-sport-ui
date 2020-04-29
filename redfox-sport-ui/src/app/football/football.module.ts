import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbListModule, NbCalendarModule } from '@nebular/theme';
import { FootballMatchCardComponent } from './components/football-match-card/football-match-card.component';
import { FootballFixturesComponent } from './components/football-fixtures/football-fixtures.component';
import { FootballTableComponent } from './components/football-table/football-table.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    FootballMatchCardComponent,
    FootballFixturesComponent,
    FootballTableComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NbCardModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbCalendarModule
  ],
  exports: [
    FootballMatchCardComponent,
    FootballFixturesComponent,
    FootballTableComponent
  ]
})
export class FootballModule { }
