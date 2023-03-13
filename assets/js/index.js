











window.addEventListener('load', async function (){

    const btnGirarDado = document.getElementById("btnGirarDado");
 
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
            }else { 
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
/*
buttonSalu.addEventListener('click', jugar);
function jugar(){ 
    console.log("nombre", text1.value);
   // saludo.innerHTML="saludos "+text1.value+" desde javascript"
    jugador1.push(rotarDados()) //persona 1
    console.log("turno de maquina")
    jugador2.push(rotarDados())//maquina 
    
    turnos++;
    console.log("data", jugador1);
    console.log("data", jugador2);
    
  
    //console.log("puntos jugador1",verificarPuntos(jugador1));
    txtdado1.innerHTML = rotarDados(jugador1).d1;
    txtdado2.innerHTML = rotarDados(jugador2).d2;

    txtpuntos1.innerHTML =verificarPuntos(jugador1);
    txtpuntos2.innerHTML = verificarPuntos(jugador2);

    if (verificarPuntos(jugador1) > 100){
        console.log("ganador jugador 1", jugador2);
        ganador.innerHTML = "Felicidades ganaste el juego";
        
    }
     if (verificarPuntos(jugador2) > 100){
        console.log("ganador jugador 2", jugador2); 
        ganador.innerHTML = "Lo siento perdiste la maquina es el ganador";
    }
   
    

}

function rotarDados(){
     dado1 = Math.floor(Math.random() * 6);
     dado2 = Math.floor(Math.random() * 6);
    return{ d1: dado1, d2: dado2 };
}
function verificarPuntos(dataPuntos){
    let puntos = 0;
   for (let i = 0; i < dataPuntos.length; i++) {
       const e = dataPuntos[i];
       puntos = puntos+e.d1 + e.d2;
     
     
    }
    console.log("cantidad de puntos acumulados",puntos)
    return puntos;
}
*/