import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbListModule, NbCalendarModule } from '@nebular/theme';
import { FootballFixturesComponent } from './components/football-fixtures/football-fixtures.component';
import { FootballTableComponent } from './components/football-table/football-table.component';
import { CoreModule } from '../core/core.module';
import { FootballFixturesCombinedComponent } from './components/football-fixtures-combined/football-fixtures-combined.component';



@NgModule({
  declarations: [
    FootballFixturesComponent,
    FootballTableComponent,
    FootballFixturesCombinedComponent
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
    FootballFixturesComponent,
    FootballTableComponent,
    FootballFixturesCombinedComponent
  ]
})
export class FootballModule { }
