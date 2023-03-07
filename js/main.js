//simulador de plazo fijo//
//1-Coloque su nombre y apellido//
//2-Si no coloca un nombre, es una entrada invalida//
//3-Ingrese el capital a invertir//
//4-Ingrese el plazo en meses//
//4-La constante interes calcula el interes segun el monto ingresa y la cantidad de meses deseados con la tasa nominal anual argentina (TNA)//
//5-Luego se muestra mediante una ecuacion la cual calcula el interes por el plazo para luego multiplicarlo por el capital deseado, esto da la ganancia//
//6-Por ultimo suma el capital mas la ganancia y le arroja el total de la inversion mas la ganancia lograda en el plazo seleccionado//
//7-Obtiene un desglose completo de su inversion y retorno tanto en alert como en html//

    const INTERES = 0.0625;
let mensajes = [];

    function calcularDesglose(nombre, capital, plazo) {
      let ganancia = capital * (INTERES * plazo);
      let total = capital + ganancia;
    
      let desglose = {
        nombre,
        capital,
        plazo,
        ganancia,
        total
      };
    
      mensajes.push(desglose);
    
      console.log(`Nuevo mensaje:`, desglose);
    
      alert(`Bienvenido ${nombre},
        \nVea debajo el desglose de su inversión:
        Capital: ${capital}
        Plazo: ${plazo}
        Interes Generado: ${ganancia}
        Total: ${total}
        TNA: 75%`);
      
      document.getElementById("titulo").innerHTML = `Bienvenido ${nombre},`;
      document.getElementById("desglose").innerHTML =`Vea debajo el desglose de su inversión:
      <br><br>Capital: $ ${capital}
      <br>Plazo: ${plazo} meses
      <br>Interés generado: $ ${ganancia}
      <br>Total: $${total}
      <br>Tasa nominal anual (TNA): 75%
      `;
    }

    function pedirDatos(nombre, capital, plazo){
      nombre = prompt("Ingrese su nombre y apellido");
  while (!nombre) {
    nombre = prompt("Entrada invalida, Ingrese su nombre y apellido");
  }
  
      capital = Number(
    prompt(`Gracias ${nombre}, \n\nIngrese capital a invertir`));
  while (!capital) {
    capital = Number(prompt(`Entrada invalida, Ingrese capital a invertir`));
  }
  
      plazo = Number(prompt(`Ingrese plazo en meses`));
  while (!plazo) {
    plazo = Number(prompt(`Entrada invalida, Ingrese plazo en meses`));
  }
  
  if (plazo < 3) {
    alert(
      `Lo siento ${nombre}, el plazo mínimo para esta inversión es de 3 meses`
    );
  } else {
    calcularDesglose(nombre, capital, plazo);
  }
  }

  function filtrarNombre(data) {
    let nombreFiltrado = prompt(`Ingrese el nombre que desee filtrar`);
    let dataFiltrada = data.filter(item => item.nombre === nombreFiltrado);
    console.log(`Calculos filtrados por nombre: ${nombreFiltrado}`, dataFiltrada);
  }

  document.getElementById('boton').addEventListener('click', pedirDatos);

  document.getElementById('filtrarNombre').addEventListener('click', function (){
    filtrarNombre(mensajes)});

