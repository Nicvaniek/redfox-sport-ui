import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FootballHomePageComponent } from './pages/football-home-page/football-home-page.component';
import { FootballLeaguePageComponent } from './pages/football-league-page/football-league-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'football', component: FootballHomePageComponent },
  { path: 'football/leagues/:id', component: FootballLeaguePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
