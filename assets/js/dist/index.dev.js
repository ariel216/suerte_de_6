"use strict";

window.addEventListener('load', function _callee() {
  var juegoActivo, btnIniciar, btnReiniciar, panelJuego, panelReglas, iniciarJuego, reiniciarJuego, btnGirarDado, txtTurnos, txtGanador, txtResultadoMaquina, txtdado1, txtdado2, txtdado3, txtdado4, txtdado5, txtdado1m, txtdado2m, txtdado3m, txtdado4m, txtdado5m, ganador, txtpuntos1, txtpuntos2, dataJugador1, dataJugadorMaquina, jugarGirarDado, sumadePuntosAcumulados, esImpar;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          esImpar = function _ref5(numero) {
            //verificandocomodin
            if (numero == 6) {
              return numero;
            }

            if (numero % 2 == 1) {
              return numero;
            }

            return 0;
          };

          sumadePuntosAcumulados = function _ref4() {
            var dataDado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var puntos = 0;
            console.log("datapuntaje", dataDado);

            for (var i = 0; i < dataDado.length; i++) {
              var e = dataDado[i];
              puntos = puntos + esImpar(e.d1) + esImpar(e.d2) + esImpar(e.d3) + esImpar(e.d4) + esImpar(e.d5);
            }

            return puntos;
          };

          jugarGirarDado = function _ref3() {
            var dado1, dado2, dado3, dado4, dado5, numDado1, numDado2, numDado3, numDado4, numDado5, dado1m, dado2m, dado3m, dado4m, dado5m, numDado1m, numDado2m, numDado3m, numDado4m, numDado5m, puntosJugador1, puntosMaquinas;
            return regeneratorRuntime.async(function jugarGirarDado$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    btnGirarDado.disabled = true;
                    btnGirarDado.style.opacity = 0.6;
                    btnGirarDado.innerText = 'Girando...'; //jugador1

                    turnos++;
                    dado1 = new Dado();
                    dado2 = new Dado();
                    dado3 = new Dado();
                    dado4 = new Dado();
                    dado5 = new Dado();
                    numDado1 = 0;
                    numDado2 = 0;
                    numDado3 = 0;
                    numDado4 = 0;
                    numDado5 = 0;
                    dado1m = new Dado();
                    dado2m = new Dado();
                    dado3m = new Dado();
                    dado4m = new Dado();
                    dado5m = new Dado();
                    numDado1m = 0;
                    numDado2m = 0;
                    numDado3m = 0;
                    numDado4m = 0;
                    numDado5m = 0;
                    console.log("turno", turnos);
                    _context.next = 27;
                    return regeneratorRuntime.awrap(dado1.girarDado());

                  case 27:
                    numDado1 = _context.sent;
                    txtdado1.innerHTML = "" + numDado1; //colocando en el DOM

                    _context.next = 31;
                    return regeneratorRuntime.awrap(dado2.girarDado());

                  case 31:
                    numDado2 = _context.sent;
                    txtdado2.innerHTML = "" + numDado2;
                    _context.next = 35;
                    return regeneratorRuntime.awrap(dado3.girarDado());

                  case 35:
                    numDado3 = _context.sent;
                    txtdado3.innerHTML = "" + numDado3;
                    _context.next = 39;
                    return regeneratorRuntime.awrap(dado4.girarDado());

                  case 39:
                    numDado4 = _context.sent;
                    txtdado4.innerHTML = "" + numDado4;
                    _context.next = 43;
                    return regeneratorRuntime.awrap(dado5.girarDado());

                  case 43:
                    numDado5 = _context.sent;
                    txtdado5.innerHTML = "" + numDado5;
                    dataJugador1.push({
                      d1: numDado1,
                      d2: numDado2,
                      d3: numDado3,
                      d4: numDado4,
                      d5: numDado5
                    }); //guardando en un objeto

                    puntosJugador1 = sumadePuntosAcumulados(dataJugador1);
                    console.log("puntaje jugador" + puntosJugador1);
                    txtpuntos1.innerHTML = "" + puntosJugador1; //mostrando turnos

                    txtTurnos.innerHTML = '';
                    dataJugador1.forEach(function (e, index) {
                      var puntajesGuardados = "" + e.d1 + "-" + e.d2 + "-" + e.d3 + "-" + e.d4 + "-" + e.d5;
                      console.log("generando html", puntajesGuardados);
                      txtTurnos.innerHTML += ' <div class="col-12"><p class="title">Turno ' + (index + 1) + '</p><div class="puntos"><p>' + puntajesGuardados + '</p></div></div>';
                    }); //maquina

                    _context.next = 53;
                    return regeneratorRuntime.awrap(dado1m.girarDado());

                  case 53:
                    numDado1m = _context.sent;
                    txtdado1m.innerHTML = "" + numDado1m;
                    _context.next = 57;
                    return regeneratorRuntime.awrap(dado2m.girarDado());

                  case 57:
                    numDado2m = _context.sent;
                    txtdado2m.innerHTML = "" + numDado2m;
                    _context.next = 61;
                    return regeneratorRuntime.awrap(dado3m.girarDado());

                  case 61:
                    numDado3m = _context.sent;
                    txtdado3m.innerHTML = "" + numDado3m;
                    _context.next = 65;
                    return regeneratorRuntime.awrap(dado4m.girarDado());

                  case 65:
                    numDado4m = _context.sent;
                    txtdado4m.innerHTML = "" + numDado4m;
                    _context.next = 69;
                    return regeneratorRuntime.awrap(dado5m.girarDado());

                  case 69:
                    numDado5m = _context.sent;
                    txtdado5m.innerHTML = "" + numDado5m;
                    dataJugadorMaquina.push({
                      d1: numDado1m,
                      d2: numDado2m,
                      d3: numDado3m,
                      d4: numDado4m,
                      d5: numDado5m
                    }); //guardando en un objeto

                    puntosMaquinas = sumadePuntosAcumulados(dataJugadorMaquina);
                    txtpuntos2.innerHTML = "" + puntosMaquinas;
                    txtResultadoMaquina.innerHTML = '';
                    dataJugadorMaquina.forEach(function (e, index) {
                      var puntajesGuardadosM = "" + e.d1 + "-" + e.d2 + "-" + e.d3 + "-" + e.d4 + "-" + e.d5;
                      console.log("generando html", puntajesGuardadosM);
                      txtResultadoMaquina.innerHTML += ' <div class="col-12"><p class="title">Turno ' + (index + 1) + '</p><div class="puntos"><p>' + puntajesGuardadosM + '</p></div></div>';
                    }); //verificando el ganador 

                    if (turnos == 6) {
                      console.log("fin del juego");

                      if (puntosJugador1 > puntosMaquinas) {
                        console.log("el ganador el el jugador 1");
                        txtGanador.innerHTML = "<h3>Felicidades....!!! Ganaste....!!!</h3>";
                      } else {
                        txtGanador.innerHTML = "<h3>Ups ....!!! Gana la máquina</h3>";
                        console.log("el ganador es la maquina");
                      }

                      btnGirarDado.disabled = true;
                      btnGirarDado.style.opacity = 0.6;
                      btnGirarDado.innerText = 'FINALIZADO';
                    } else {
                      btnGirarDado.disabled = false;
                      btnGirarDado.style.opacity = 1;
                      btnGirarDado.innerText = 'Girar el dado';
                    }

                  case 77:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          reiniciarJuego = function _ref2() {
            location.reload();
          };

          iniciarJuego = function _ref() {
            juegoActivo = true;
            panelJuego.style.display = 'block';
            panelReglas.style.display = 'none';
            btnIniciar.style.display = 'none';
            btnReiniciar.style.display = 'inline';
          };

          //inicio y reseteo del juego 
          juegoActivo = false;
          btnIniciar = document.getElementById('btnIniciar');
          btnReiniciar = document.getElementById('btnReiniciar');
          panelJuego = document.getElementById('panelJuego');
          panelReglas = document.getElementById('panelReglas');
          //btnIniciar.addEventListener('click', iniciarJuego);
          btnReiniciar.addEventListener('click', reiniciarJuego); //

          btnGirarDado = document.getElementById("btnGirarDado");
          txtTurnos = document.getElementById("colPuntosJugador1");
          txtGanador = document.getElementById("ganador");
          txtResultadoMaquina = this.document.getElementById('colPuntosMaquina');
          txtdado1 = document.getElementById('dado1');
          txtdado2 = document.getElementById('dado2');
          txtdado3 = document.getElementById('dado3');
          txtdado4 = document.getElementById('dado4');
          txtdado5 = document.getElementById('dado5');
          txtdado1m = document.getElementById('dado1m');
          txtdado2m = document.getElementById('dado2m');
          txtdado3m = document.getElementById('dado3m');
          txtdado4m = document.getElementById('dado4m');
          txtdado5m = document.getElementById('dado5m');
          ganador = document.getElementById('ganador');
          txtpuntos1 = document.getElementById('puntajeJugador');
          txtpuntos2 = document.getElementById('puntajeMaquina');
          dataJugador1 = [];
          dataJugadorMaquina = [];
          turnos = 0;
          btnGirarDado.addEventListener('click', jugarGirarDado);

        case 32:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
});