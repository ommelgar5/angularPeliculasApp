import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  busqueda: string;
  cargandoResultados: boolean;

  constructor(public ps: PeliculasService,
              private router: Router,
              private route: ActivatedRoute ) {

    this.cargandoResultados = true;
    this.route.params.subscribe( parametros => {

      if(parametros['busqueda']){
        this.busqueda = parametros['busqueda'];
        this.buscar();
      }else{
        this.cargandoResultados = false;
      }
    });

  }

  ngOnInit(): void {
  }

  buscar(){
    if(this.busqueda.trim().length == 0) return;
    this.cargandoResultados = true;
    this.ps.buscar(this.busqueda).subscribe( () => this.cargandoResultados = false );
  }

  verPelicula(id: number ){
    this.router.navigate(['/pelicula', id , 'buscar', this.busqueda]);
  }
}
