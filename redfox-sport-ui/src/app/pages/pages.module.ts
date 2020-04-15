import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { FootballModule } from '../football/football.module';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    FootballModule,
    NbButtonModule
  ]
})
export class PagesModule { }
