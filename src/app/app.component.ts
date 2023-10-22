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
    this.celdas[0][2] = {imagen:"../assets/kevin/frogal.jpg" , parrafo:'Un ladrón deberá escapar de un museo abandonado luego de despertar un sapo mitológico al robar una reliquia.'};





    this.celdas[0][3] = {imagen :"../assets/kevin/tears-o-love.jpg", parrafo: 'Los jugadores tomarán el control de una pareja de casados que se odian por igual. Ambos quieren deshacerse del otro y usan sus bodas de oro como excusa para acabar con la vida del otro.'};
    this.celdas[1][3] = {imagen :"../assets/kevin/hunting-grounds.jpg", parrafo: 'Es un simulador de caza donde cazarecompensas de monstruos deberán construir jaulas para capturar seres bestiales y peligrosos.'};
    this.celdas[2][3] = {imagen :"../assets/kevin/fishing_day.jpg", parrafo: 'Los jugadores encarnan a dos amigos de la infancia que se juntan para tener un divertido día de pesca. Dos jugaores competirán para capturar la mayor cantidad de peces posibles.'};
    this.celdas[3][3] = {imagen :"../assets/kevin/the-cellar.jpg", parrafo: 'Los jugadores se enfrentarán a un juego sádico hecho por un asesino en serie, dónde deberán escapar lo más rápido posible de una jaula sin que el asesino se percate.'};
    this.celdas[4][3] = {imagen :"../assets/kevin/mousework.jpg", parrafo: 'Un juego de pelea beat em up donde los jugadores tomarán el control de ratas de laboratorio que deberán pelear para evitar ser sacrificadas.'};
    this.celdas[5][3] = {imagen :"../assets/kevin/cagekeeper.jpg", parrafo: 'Los jugadores encarnarán a un técnico de jaulas que deberán hacer mantenimiento de unas jaulas con extraños seres habitando en ellas.'};
    this.celdas[6][3] = {imagen :"../assets/kevin/encage.jpg", parrafo: 'Los jugadores deberán competir para sobrevivir. Los jugadores encarnarán a supervisores de una agencia anti-fantasmas y deberán revisar constantemen actividad paranormal en jaulas.'};
    this.celdas[7][3] = {imagen :"../assets/kevin/heart-in-a-cage.jpg", parrafo: 'Los jugadores se enfrentarán a una carrera contra el tiempo en este juego de plataformas surreal.'};
    this.celdas[8][3] = {imagen :"../assets/kevin/cage-me.jpg", parrafo: 'En este juego competitivo hay dos bandos. Los protectores y los vampiros. Los protectores deberán vigilar a los vampiros para que no escapen de sus jaulas.'};
    this.celdas[9][3] = {imagen :"../assets/kevin/blue-rush.jpg", parrafo: 'En este juego competitivo, los jugadores deberán evitar criaturas marinas y rocas para no chocar y no dañar sus cápsulas de viaje.'};

  }
  
  }


