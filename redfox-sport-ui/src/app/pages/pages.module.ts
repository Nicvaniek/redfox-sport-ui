import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    NbCardModule
  ]
})
export class PagesModule { }
