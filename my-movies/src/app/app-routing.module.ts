import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewMoviesComponent } from './components/view-movies/view-movies.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'view-Movies', component: ViewMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
