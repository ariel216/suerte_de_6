window.addEventListener('load', async function (){

    //inicio y reseteo del juego 
    let juegoActivo = false;
    let btnIniciar = document.getElementById('btnIniciar');
    let btnReiniciar = document.getElementById('btnReiniciar');
    let panelJuego = document.getElementById('panelJuego');
    let panelReglas = document.getElementById('panelReglas');

    function iniciarJuego (){
        juegoActivo=true;
        panelJuego.style.display = 'block';
        panelReglas.style.display = 'none';
        btnIniciar.style.display = 'none';
        btnReiniciar.style.display = 'inline';
    }

    function reiniciarJuego(){
        location.reload();
    }

    btnIniciar.addEventListener('click', iniciarJuego);
    btnReiniciar.addEventListener('click', reiniciarJuego);
    //

    const btnGirarDado = document.getElementById("btnGirarDado");
    const txtTurnos = document.getElementById("colPuntosJugador1");
    const txtGanador = document.getElementById("ganador");
    const txtResultadoMaquina = this.document.getElementById('colPuntosMaquina');

 
    const txtdado1 = document.getElementById('dado1');
    const txtdado2 = document.getElementById('dado2');
    const txtdado3 = document.getElementById('dado3');
    const txtdado4 = document.getElementById('dado4');
    const txtdado5 = document.getElementById('dado5');
    
    const txtdado1m = document.getElementById('dado1m');
    const txtdado2m = document.getElementById('dado2m');
    const txtdado3m = document.getElementById('dado3m');
    const txtdado4m = document.getElementById('dado4m');
    const txtdado5m = document.getElementById('dado5m');

    const ganador = document.getElementById('ganador');
    const txtpuntos1 = document.getElementById('puntajeJugador');
    const txtpuntos2 = document.getElementById('puntajeMaquina');

    var dataJugador1 = [];
    var dataJugadorMaquina = [];

    turnos = 0;
   
    btnGirarDado.addEventListener('click', jugarGirarDado);
    async function jugarGirarDado(){
        btnGirarDado.disabled = true;
        btnGirarDado.style.opacity = 0.6;
        btnGirarDado.innerText = 'Girando...';
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

        let dado1m = new Dado();
        let dado2m = new Dado();
        let dado3m = new Dado();
        let dado4m = new Dado();
        let dado5m = new Dado();
        let numDado1m = 0;
        let numDado2m = 0;
        let numDado3m = 0;
        let numDado4m = 0;
        let numDado5m = 0;

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
            txtTurnos.innerHTML += ' <div class="col"><p>Turno ' + (index+1) + '</p><div class="puntos"><p>' + puntajesGuardados + '</p></div></div>';
        });

        //maquina
         numDado1m = await dado1m.girarDado();
         txtdado1m.innerHTML = "" + numDado1m;
         numDado2m = await dado2m.girarDado();
         txtdado2m.innerHTML = "" + numDado2m;
         numDado3m = await dado3m.girarDado();
         txtdado3m.innerHTML = "" + numDado3m;
         numDado4m = await dado4m.girarDado();
         txtdado4m.innerHTML = "" + numDado4m;
         numDado5m = await dado5m.girarDado();
         txtdado5m.innerHTML = "" + numDado5m;

        dataJugadorMaquina.push({ d1: numDado1m, d2: numDado2m, d3: numDado3m, d4: numDado4m, d5: numDado5m });//guardando en un objeto
        let puntosMaquinas = sumadePuntosAcumulados(dataJugadorMaquina);
        txtpuntos2.innerHTML = "" + puntosMaquinas;
        
        txtResultadoMaquina.innerHTML = '';

        dataJugadorMaquina.forEach((e,index) =>
        {
            let puntajesGuardadosM = "" + e.d1 + "-" + e.d2 + "-" + e.d3 + "-" + e.d4 + "-" + e.d5;
            console.log("generando html", puntajesGuardadosM);
            txtResultadoMaquina.innerHTML += ' <div class="col"><p>Turno ' + (index+1) + '</p><div class="puntos"><p>' + puntajesGuardadosM + '</p></div></div>';
        });

        //verificando el ganador 
        if (turnos == 6){ 
            console.log("fin del juego")
            if (puntosJugador1>puntosMaquinas){ 
                console.log("el ganador el el jugador 1");
                txtGanador.innerHTML="<h3>Felicidades....!!! Ganaste....!!!</h3>"
            } else{ 
                txtGanador.innerHTML="<h3>Ups ....!!! Gana la máquina</h3>"
                console.log("el ganador es la maquina");

            }
            btnGirarDado.disabled = true;
            btnGirarDado.style.opacity = 0.6;
            btnGirarDado.innerText = 'FINALIZADO';
        }else{
            btnGirarDado.disabled = false;
            btnGirarDado.style.opacity = 1;
            btnGirarDado.innerText = 'Girar el dado';
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
