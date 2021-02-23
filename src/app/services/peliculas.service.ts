import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient ) {
  }

   private API_KEY = '9ba7b5f77ee44246b118f98ecd496635';
   private urlMovieDB = 'https://api.themoviedb.org/3';

   carteleras: any[] = [];
   populares: any[] = [];
   resultados: any[] = [];
   pelicula: any;


   ultimosLanzamientos() {
     return this.http.jsonp(`${ this.urlMovieDB }/movie/now_playing?api_key=${ this.API_KEY }&language=es`, 'callback=JSONP_CALLBACK')
            .pipe( map( respuesta => {
              this.carteleras = respuesta['results'];
              return respuesta['results'];
            }));
   }

  obtenerPopulares(){
    return this.http.jsonp(`${ this.urlMovieDB }/movie/popular?api_key=${ this.API_KEY }&language=es`, 'callback=JSONP_CALLBACK')
            .pipe( map( respuesta => {
              this.populares = respuesta['results'];
              return respuesta['results'];
            }));
  }

  obtenerPelicula(id: number){
    return this.http.jsonp(`${ this.urlMovieDB }/movie/${ id }?api_key=${ this.API_KEY }`, 'callback=JSONP_CALLBACK')
          .pipe( map( respuesta => this.pelicula = respuesta ));
  }

  buscar(texto: string){
    return this.http.jsonp(`${ this.urlMovieDB }/search/movie?api_key=${ this.API_KEY }&language=es&query=${ texto }`, 'callback=JSONP_CALLBACK')
            .pipe( map( respuesta => {
              this.resultados = respuesta['results'];
              return respuesta['results'];
            }));
  }


}
