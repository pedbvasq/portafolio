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


    this.celdas[3][6] = { imagen: "../assets/javier/choreo1.3.jpg", parrafo: 'El conductor secuentra el bus y ahora debes escapar de el antes de que te roben.' };
    this.celdas[4][6] = { imagen: "../assets/javier/choreo1.4.jpg", parrafo: 'El ladron va a robarle a una persona que no eres tu, debes identificar a esta persona antes de que el ladron se acerque a robarle y advertirle para salir del bus.' };

    this.celdas[3][7] = { imagen: "../assets/javier/tiburon1.3.jpg", parrafo: 'Si golpea a algun humano por accidente estos lo atacaran de vuelta.' };
    this.celdas[4][7] = { imagen: "../assets/javier/tiburon1.4.jpg", parrafo: 'Que los enemigos usen habilidades de artes marciales y al derrotarlos aprenderlas.' };

    this.celdas[5][8] = { imagen: "../assets/javier/laberinto1.3.jpg", parrafo: 'Eres un niño pequeño en el laberinto y te persigue una sombra, al final del juego descubres que la sombra siempre fuiste tu mismo.' };
    this.celdas[6][8] = { imagen: "../assets/javier/laberinto1.4.jpg", parrafo: 'El laberinto es un espacio pequeño y el piso esta mojado, conforme pasa el tiempo el nivel de agua sube, si no escapas a tiempo terminaras agohandote. El agua hace que vayas mas lento y no sabes nadar.' };

    this.celdas[4][9] = { imagen: "../assets/javier/escapeisla2.jpg", parrafo: 'Puedes atacar a los policias para tomar su ropa y ser inmune a la luz por unos segundos.' };
    this.celdas[5][9] = { imagen: "../assets/javier/escapeisla1.jpg", parrafo: 'En lugar de escapar de una prision estas tratando de escapar de un monstruo con vision limitada.' };

    this.celdas[3][1] = { imagen: "../assets/javier/monigote1.jpg", parrafo: 'Hay un monigote gigantes con explisivos que explota cuando se acerca a ti.' };
    this.celdas[4][1] = { imagen: "../assets/javier/monigote2.jpg", parrafo: 'En lugar de escapar del fuego estas atrapando a las personas para ponerlas en el fuego, todo esto para realizar una invocacion del diablo para hacer un pacto con este y devolvertle la vida a tu madre.' };

    this.celdas[7][4] = { imagen: "../assets/javier/perro2.jpg", parrafo: 'Cada noche se duplica la cantidad de perros buscandote' };
    this.celdas[8][4] = { imagen: "../assets/javier/perro1.jpg", parrafo: 'Durante el dia el perro desaparece y puedes salir a recolectar cosas.' };

    this.celdas[5][5] = { imagen: "../assets/javier/zombiesespol1.jpg", parrafo: 'Debes aguantar la orda de zombies junto al monumento espol hasta que lleguen a rescatarte en helicptero.' };
    this.celdas[6][5] = { imagen: "../assets/javier/zombiesespol2.jpg", parrafo: 'Hay diferentes tipos de zombies segun el tipo de estudiante infectado. Hay zombies inteligentes.' };

    this.celdas[7][0] = { imagen: "../assets/javier/escapecarcel1.jpg", parrafo: 'Tienes una barra de estamina, lo que significa que nop puedes estar trepado en las paredes por mucho tiempo y no puedes correr sin cansarte.' };
    this.celdas[8][0] = { imagen: "../assets/javier/escapecarcel2.jpg", parrafo: 'Mientras vas avanzando en los niveles descubres que hay un monstruo en la carcel que esta matando a todos los policias, asi que pasas de escapar de policias a escapar de un monstruo' };

    this.celdas[5][6] = { imagen: "../assets/javier/choreo3.jpg", parrafo: 'Eres guardia en un banco y debes decidir si dejar pasar a las personas que van llegando, si dejas pasar a un ladron pierdes.' };
    this.celdas[6][6] = { imagen: "../assets/javier/choreo4.jpg", parrafo: 'Eres jefe de un atraco a un banco y sospechas que hay un soplon en tu equipo, debes descubrir quien es durante la mision antes del momento de su traicion.' };







    //ESPACIO AARON

    //Mis ideas

    this.celdas[0][9] = { imagen: "../assets/aaron/escape.PNG", parrafo: 'Es un juego en 2d de una prision en medio de un lago, el jugador es un prisionero que debe evitar el campo de vision de las luces para poder escapar del lago.' };
    this.celdas[0][8] = { imagen: "../assets/aaron/laberinto.PNG", parrafo: 'Juego en 3d, es un laberinto que se repite en bucle, hasta que el jugador logra resolver una serie de acertijos y escapar' };
    this.celdas[0][6] = { imagen: "../assets/aaron/choreo.PNG", parrafo: 'Juego en tercera persona casual simulador de choreo en busetas, es un simulador que tiene como objetivo identificar actividades sospechosas de delitos en Ecuador, el jugador  debe tomar decisiones acertadas para identificar quien es el ladrón  sin cometer errores, esto antes de que el ladrón logre ejecutar el delito.' };


    //Mis variaciones

    this.celdas[1][0] = { imagen: "../assets/aaron/prision_rediseno.jpg", parrafo: 'El juego posee varias habitaciones en 2d con mapa expandible, no un endless runner' };
    this.celdas[2][0] = { imagen: "../assets/aaron/prision_ataque.jpg", parrafo: 'Se puede atacar a los guardias como medida preventiva para huir' };
    this.celdas[3][0] = { imagen: "../assets/aaron/prision_distraer.jpg", parrafo: 'Se pueden tirar objetos para distraer y moverse por algun sector' };
    this.celdas[4][0] = { imagen: "../assets/aaron/prision_matar.jpg", parrafo: 'Se pueden conseguir armas y matar a policias, pero esto generara alertas' };
    this.celdas[5][0] = { imagen: "../assets/aaron/prision_respawn.jpg", parrafo: 'Si te vuelven a capturar respawneas pero en una prision de mayor seguridad' };
    this.celdas[6][0] = { imagen: "../assets/aaron/prision_vigia.jpg", parrafo: 'Los guardias a veces se duermen pero si son alertados entrar en estado de vigia' };

    this.celdas[3][8] = { imagen: "../assets/aaron/kungfu_puntos.jpg", parrafo: 'El tiburon gana xp y puntos alimentadnose de peces en el camino' };
    this.celdas[4][8] = { imagen: "../assets/aaron/kungfu_tipos.jpg", parrafo: 'Hay varios tipos de tiburones con especialidades de pelea' };

    this.celdas[1][4] = { imagen: "../assets/aaron/perroescondite_distraer.jpg", parrafo: 'Se puede distraer al perro lanzando huesos, comida, etc' };
    this.celdas[2][4] = { imagen: "../assets/aaron/perroescondite_domar.jpg", parrafo: 'Se puede domar otros perros o animales para protegerte' };
    this.celdas[3][4] = { imagen: "../assets/aaron/perroescondite_evol.jpg", parrafo: 'Con el paso de los niveles, el perro se hace mas grande y fuerte, es decir que evoluciona' };
    this.celdas[4][4] = { imagen: "../assets/aaron/perroescondite_lento.jpg", parrafo: 'Si estas herido, caminas mas lento y no puedes correr' };
    this.celdas[5][4] = { imagen: "../assets/aaron/perroescondite_niveles.jpg", parrafo: 'Cada noche es un nivel, se debe sobrevivir una n cantidad de noches' };
    this.celdas[6][4] = { imagen: "../assets/aaron/perroescondite_tranquil.jpg", parrafo: 'Existe una pistola con dardos tranquilizantes para usar en el perro por emergencias' };

    this.celdas[3][9] = { imagen: "../assets/aaron/prisionlago_sabotear.jpg", parrafo: 'Existe la posibilidad de sabotear las torres de luz para ganar ventaja' };

    this.celdas[3][5] = { imagen: "../assets/aaron/zombiespol_clases.jpg", parrafo: 'Cada facultad tiene clases, es decir alumnos especializados en areas que serviran para sobrevivir, ejemplo: medico, mecanico, artillero, hacker, etc' };
    this.celdas[4][5] = { imagen: "../assets/aaron/zombiespol_zonasseguras.jpg", parrafo: 'Las zonas seguras pueden ser comedores, o ubep, donde se puede recuperar puntos de vida' };




















    //ESPACIO ESTUDIANTE 4



























    //ESPACIO ESTUDIANTE 5


























    //ESPACIO ESTUDIANTE 6
    this.celdas[0][2] = {imagen:"../assets/kevin/frogal.jpg" , parrafo:'Un ladrón deberá escapar de un museo abandonado luego de despertar un sapo mitológico al robar una reliquia.'};
    this.celdas[1][2] = {imagen:"../assets/kevin/froggy-the-series.jpg" , parrafo:'Un niño deberá sobrevivir de una espíritu maligno que toma la forma de Froggy, una estrella de una serie infantil.'};
    this.celdas[2][2] = {imagen:"../assets/kevin/frogmare.jpg" , parrafo:'Los jugadores se encuentran en un pantano abandonado donde los sapos se han vuelto malignos y sedientos de sangre. Deben luchar por su supervivencia y descubrir el misterio detrás de la siniestra transformación de los sapos.'};
    this.celdas[3][2] = {imagen:"../assets/kevin/frogkill.jpg" , parrafo:'Un apocalipsis de sapos ha invadido la Tierra, y los jugadores deben luchar contra hordas de sapos zombis y mutantes mientras buscan refugio y una manera de detener esta plaga anfibia.'};
    this.celdas[4][2] = {imagen:"../assets/kevin/frogmaze.jpg" , parrafo:'Los jugadores exploran un mundo mágico y siniestro donde los sapos son los gobernantes y los humanos son considerados intrusos. Deben escapar de las garras de estos sapos malévolos y encontrar una forma de regresar a su propio mundo.'};
    this.celdas[5][2] = {imagen:"../assets/kevin/frogscape.jpg" , parrafo:'En este juego de terror, los jugadores deben resolver acertijos y enfrentar desafíos a medida que se adentran en un pantano habitado por sapos que pueden ser encantadores pero mortales.'};
    this.celdas[6][2] = {imagen:"../assets/kevin/frogpocalypse.jpg" , parrafo:'En este juego, los jugadores se convierten en cazadores de sapos malditos que acechan en la noche. Deben enfrentar desafíos sobrenaturales mientras buscan y eliminan a los sapos que han sido corrompidos por la magia oscura.'};
    this.celdas[7][2] = {imagen:"../assets/kevin/frognaf.jpg" , parrafo:'Los jugadores asumen el papel de un científico que ha llegado a un pantano misterioso para investigar una epidemia que ha transformado a los sapos en seres terroríficos. Deben descubrir la causa detrás de la mutación y encontrar una cura.'};
    this.celdas[8][2] = {imagen:"../assets/kevin/manglar.jpg" , parrafo:'Después de años de contaminación en un lago, un sapo gigante se despierta y comienza a aterrorizar una pequeña ciudad. Los jugadores deberán abrirse paso por el manglar tomando control del sapo mutante y destruir todo.'};
    this.celdas[9][2] = {imagen:"../assets/kevin/pantano.jpg" , parrafo:'Los jugadores exploran un antiguo pantano olvidado donde los sapos han sido usados en rituales oscuros. Deben desvelar secretos ancestrales y enfrentar criaturas sobrenaturales para liberar a los sapos de su sufrimiento.'};


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

    
    this.celdas[0][7] = {imagen :"../assets/kevin/shark-fu.jpg", parrafo: 'Un tiburón experto en artes marciales deberá enfrentarse a los peligros del mar para proteger a los nadadores locales.'};



  }
  
  }


