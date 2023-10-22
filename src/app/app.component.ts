import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  celdas: { imagen: string; parrafo: string }[][];

  constructor() {
    this.celdas = Array.from({ length: 10 }, () => Array(10).fill({ imagen: '', parrafo: '' }));

    // Asigna valores diferentes para cada celda
    this.celdas[0][0] = { imagen: "../assets/pedro/EscapeDecarcel.png", parrafo: 'Es un juego 2d donde un ladron tiene que escapar de los guardias para hacerlo no tiene que ser visto, puede trepar paredes o esconderse, los guardias tienen linternas si lo notan lo llevaran a la carcel de nuevo' };
    this.celdas[0][1] = { imagen: 'imagen2.jpg', parrafo:'Texto2' };
    this.celdas[1][0] = { imagen: 'imagen3.jpg', parrafo: 'Texto 3' };
    // y así sucesivamente...
  }
}

