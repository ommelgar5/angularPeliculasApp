import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( pelicula: any, poster: boolean = false, backdrop: boolean = false  ): string {

    let imagen = 'assets/img/noimage_mod.png';
    let url = 'https://image.tmdb.org/t/p/w500';

    if(poster) {
      if(pelicula.poster_path) return url + pelicula.poster_path;
    }

    if(backdrop){
      if(pelicula.backdrop_path) return url + pelicula.backdrop_path;
    }

    if(!poster && !backdrop ){
      if(pelicula.backdrop_path) return url + pelicula.backdrop_path;
      if(pelicula.poster_path) return url + pelicula.poster_path;
    }

    return imagen;
  }

}
