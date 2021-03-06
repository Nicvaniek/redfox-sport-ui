import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
} from '@nebular/theme';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    PagesModule,
    CoreModule,
    ApiModule.forRoot({ rootUrl: 'https://redfox-sport-api.herokuapp.com' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
