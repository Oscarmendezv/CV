import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'
import {TimelineComponent} from './timeline/timeline.component'
import {PortfolioComponent} from './portfolio/portfolio.component'

const routes: Routes = [
  { path:'', component: WelcomeComponent}, //RouteGuard service for authentication
  { path:'timeline', component: TimelineComponent},
  { path:'portfolio', component: PortfolioComponent},
  { path:'', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
