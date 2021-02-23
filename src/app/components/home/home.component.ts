import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  cargandoCatelera: boolean;
  cargandoPopulares: boolean;


  constructor( public ps: PeliculasService)
  {
    this.cargandoCatelera = true;
    this.cargandoPopulares = true;

    this.ps.ultimosLanzamientos().subscribe( () =>  this.cargandoCatelera = false );
    this.ps.obtenerPopulares().subscribe( () => this.cargandoPopulares = false );
  }

}
