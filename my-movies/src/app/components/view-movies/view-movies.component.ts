// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})

export class ViewMoviesComponent  {
  // implements OnInit
  // constructor(private MoviesService: MoviesService) { }

  // ngOnInit() {
  //   // Aquí invocamos al servicio:
  //   this.MoviesService.getMovies().subscribe(data => {
  //     console.log("Los datos: ", data);
  //   });
  // }

  // Inyectar servicio en constructor
  constructor(private moviesService: MoviesService) {}

  // Función que hace la petición
  probarGet() {
    this.moviesService
    .getMovies()
    .subscribe(data => {
          console.log("Los datos: ", data)})
  }

  onSubmit() { // <----
    this.probarGet()
  }
}
