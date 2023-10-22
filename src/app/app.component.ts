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


