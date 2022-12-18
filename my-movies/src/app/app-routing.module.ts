import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewMoviesComponent } from './components/view-movies/view-movies.component';
import { ViewSeriesComponent } from './components/view-series/view-series.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'view-Movies', component: ViewMoviesComponent},
  {path: 'view-Series', component: ViewSeriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
