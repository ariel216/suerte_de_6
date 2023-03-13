class Dado{
     caras;
    constructor() {
        this.caras = 6; 
    }
  async girarDado(){
      return new Promise((resolve, reject) =>
      {
          let numero = Math.floor(Math.random() * this.caras)
          setInterval(() => {
              resolve(numero);
          }, 300);
        })
    }
    verificarPuntos(dataPuntos){
        let puntos = 0;
       for (let i = 0; i < dataPuntos.length; i++) {
           const e = dataPuntos[i];
           puntos = puntos+e.d1 + e.d2;
        }
        console.log("cantidad de puntos acumulados",puntos)
        return puntos;
    }
    
} 