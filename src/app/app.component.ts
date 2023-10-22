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

    //ESPACIO PARA PEDRO
    this.celdas[0][0] = { imagen: "../assets/pedro/EscapeDecarcel.png", parrafo: 'Es un juego 2d donde un ladron tiene que escapar de los guardias para hacerlo no tiene que ser visto, puede trepar paredes o esconderse, los guardias tienen linternas si lo notan lo llevaran a la carcel de nuevo' };
    this.celdas[1][1] = { imagen: "../assets/pedro/fin1.1.png", parrafo: 'los monigotes luego de ser quemados perseguiran al jugador' };
    this.celdas[2][1] = { imagen: "../assets/pedro/fin1.2.png", parrafo: 'ahora el jugador es un monigote y debe escapar' };
    this.celdas[1][2] = { imagen: "../assets/pedro/sapo1.1.png", parrafo: 'el jugador se convertira en sapo' };
    this.celdas[2][2] = { imagen: "../assets/pedro/sapo1.2.png", parrafo: 'luego de robar la reliquia lo seguiran ranas hasta el final' };
    this.celdas[1][3] = { imagen: "../assets/pedro/boda1.1.png", parrafo: 'parte de los obstaculos seran criaturas maritimas antiguas' };
    this.celdas[2][3] = { imagen: "../assets/pedro/boda1.2.png", parrafo: 'al final todo fue un sueño' };


    this.celdas[1][5] = { imagen: "../assets/pedro/zombie1.1.png", parrafo: 'mientras el bus recorre la espol un volcan esta en erupcion' };
    this.celdas[2][5] = { imagen: "../assets/pedro/zombie1.2.png", parrafo: 'deben bajarse del bus y matar a todos los zombies y encontrar la cura' };
    this.celdas[1][6] = { imagen: "../assets/pedro/choreo1.1.png", parrafo: 'debe subirse en el bus y llegar a la meta sin que le roben' };
    this.celdas[2][6] = { imagen: "../assets/pedro/choreo1.2.png", parrafo: 'ahora el jugador debe robar' };
    this.celdas[1][7] = { imagen: "../assets/pedro/tiburon1.1.png", parrafo: 'mientras vence a mas enemigos se convertira en un megalodon' };
    this.celdas[2][7] = { imagen: "../assets/pedro/tiburon1.2.png", parrafo: 'aparte de pelear tendra un poder de lanzar lasers y al final tendra que vencer a un tiburon de 3 cabezas' };


    this.celdas[1][8] = { imagen: "../assets/pedro/laberinto1.1.png", parrafo: 'el laberinto sera como el  bosque perdido de the legend of zelda' };
    this.celdas[2][8] = { imagen: "../assets/pedro/laberinto1.2.png", parrafo: 'el laberinto sera como maze runner cambiante y habra un monstruo que nos persigue' };
    this.celdas[1][9] = { imagen: "../assets/pedro/escapedeisla1.1.png", parrafo: 'exite una opcion donde puedes subirte a una moto acuatica' };
    this.celdas[2][9] = { imagen: "../assets/pedro/escapedeisla1.2.png", parrafo: 'para escapar de la isla debera pasar por 4 niveles , de agua,fuego, tierra y aire.' };

























    //ESPACIO PARA JAVIER



















    //ESPACIO AARON





















    //ESPACIO ESTUDIANTE 4



























    //ESPACIO ESTUDIANTE 5


























    //ESPACIO ESTUDIANTE 6


  }
  }


