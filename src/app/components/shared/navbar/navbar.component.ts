import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent  {

  @ViewChild('busqueda') busquedaElement: ElementRef;

  constructor( private router: Router) { }

  buscar(termino: string){
    if(!termino.trim().length) return;
    this.busquedaElement.nativeElement.value = '';
    this.router.navigate(['/buscar', termino]);
  }

}
