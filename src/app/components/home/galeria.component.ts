import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent  {


  @Input('galeria') galeria: any[];

  constructor( private router: Router ) { }


  verPelicula(id: number ){
    this.router.navigate(['pelicula', id , 'home']);
  }

}
