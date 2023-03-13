











window.addEventListener('load', async function (){

    const btnGirarDado = document.getElementById("btnGirarDado");
    const txtTurnos = document.getElementById("colPuntosJugador1");
    const txtGanador = document.getElementById("ganador");


 
    const txtdado1 = document.getElementById('dado1');
    const txtdado2 = document.getElementById('dado2');
    const txtdado3 = document.getElementById('dado3');
    const txtdado4 = document.getElementById('dado4');
    const txtdado5 = document.getElementById('dado5');
    //const txtdado2 = document.getElementById('dadom1');

    const ganador = document.getElementById('ganador');
    const txtpuntos1 = document.getElementById('puntajeJugador');
    const txtpuntos2 = document.getElementById('puntosMaquinas');

    var puntajeJugador1 = 0;
    var puntajeMaquina = 0;

    var dataJugador1 = [];
    var dataJugadorMaquina = [];

    turnos = 0;
   
    

 /*   
    console.log("girando dado ->",  data);
    console.log("girando dado ->", data2); */
    btnGirarDado.addEventListener('click', jugarGirarDado);
    async function jugarGirarDado(){
        //jugador1
        turnos++;
        let dado1 = new Dado();
        let dado2 = new Dado();
        let dado3 = new Dado();
        let dado4 = new Dado();
        let dado5 = new Dado();
        let numDado1 = 0;
        let numDado2 = 0;
        let numDado3 = 0;
        let numDado4 = 0;
        let numDado5 = 0;
        console.log("turno",turnos);
        numDado1 = await dado1.girarDado();
        txtdado1.innerHTML = "" + numDado1; //colocando en el DOM
        numDado2 = await dado2.girarDado();
        txtdado2.innerHTML = "" + numDado2;
        
        numDado3 = await dado3.girarDado();
        txtdado3.innerHTML = "" + numDado3;
        numDado4 = await dado4.girarDado();
        txtdado4.innerHTML = "" + numDado4;
        numDado5 = await dado5.girarDado();
        txtdado5.innerHTML = "" + numDado5;
        dataJugador1.push({ d1: numDado1, d2: numDado2, d3: numDado3, d4: numDado4, d5: numDado5 }); //guardando en un objeto
        let puntosJugador1 = sumadePuntosAcumulados(dataJugador1);
        console.log("puntaje jugador"+puntosJugador1);
        txtpuntos1.innerHTML = "" + puntosJugador1;
        //mostrando turnos
        txtTurnos.innerHTML = '';
        dataJugador1.forEach((e,index) =>
        {
            let puntajesGuardados = "" + e.d1 + "-" + e.d2 + "-" + e.d3 + "-" + e.d4 + "-" + e.d5;
            console.log("generando html", puntajesGuardados);
            txtTurnos.innerHTML += ' <div class="col"><p class="turno">Turno ' + (index+1) + '</p><div class="puntos"><p>' + puntajesGuardados + '</p></div></div>';
        });

        //maquina
         numDado1 = await dado1.girarDado();
         numDado2 = await dado2.girarDado();
         numDado3 = await dado3.girarDado();
         numDado4 = await dado4.girarDado();
         numDado5 = await dado5.girarDado();
        dataJugadorMaquina.push({ d1: numDado1, d2: numDado2, d3: numDado3, d4: numDado4, d5: numDado5 });//guardando en un objeto
        let puntosMaquinas = sumadePuntosAcumulados(dataJugadorMaquina);
        //verificando el ganador 
        if (turnos == 6){ 
            console.log("fin del juego")
            if (puntosJugador1>puntosMaquinas){ 
                console.log("el ganador el el jugador 1");
                txtGanador.innerHTML="<h3>Felicidades....!!! Ganaste....!!!</h3>"
            } else{ 
                txtGanador.innerHTML="<h3>Ups ....!!!</h3>"
                console.log("el ganador es la maquina");

            }
        }

      
    }

  function  sumadePuntosAcumulados(dataDado=[]){
      let puntos = 0;
      console.log("datapuntaje", dataDado);
        for (let i = 0; i < dataDado.length; i++) {
            const e = dataDado[i];
            puntos = puntos+esImpar(e.d1) + esImpar(e.d2)+esImpar(e.d3)+esImpar(e.d4)+esImpar(e.d5);
      }
      return puntos;
    }
    function esImpar(numero){
        
        //verificandocomodin
        if (numero==6){
            return numero;
        }
        if (numero % 2 == 1){
           return numero 
        }
        return 0;
    }

});
