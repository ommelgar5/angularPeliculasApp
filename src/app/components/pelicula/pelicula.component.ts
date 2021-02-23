import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  id: number;
  pagina: string;
  busqueda: string;

  cargandoPelicula: boolean;

  constructor(
              public ps: PeliculasService,
              private route: ActivatedRoute,
              private router: Router
              ){

  	  this.inicializar();
  }


  ngOnInit(): void {
  }

  inicializar() {

    this.cargandoPelicula = true;
    this.route.params.subscribe( parametros => {

      this.id =  Number(parametros['id']);
      this.pagina = parametros['pagina'];
      this.busqueda = parametros['busqueda'];

      this.ps.obtenerPelicula(this.id).subscribe( () => this.cargandoPelicula = false );

    });
  }


  regresar(){
    if(this.pagina === 'buscar') {
      this.router.navigate(['/' + this.pagina, this.busqueda]);
    }else{
      this.router.navigate(['/'+ this.pagina]);
    }
  }



}
