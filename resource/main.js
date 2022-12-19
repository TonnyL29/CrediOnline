// Constante comision por gestion

const comision = 1.0815;

// constantes de lina de inclusion financiara Santander Rio
const LISR = {
    sinc12: 122.55,
    sinc18: 95.24,
    sinc24: 82.13,
    sinc36: 70.03,
    sinc48: 64.86,
    sinc60: 62.33
}

// Objeto Constante linea convencional Santander Rio

const LCSR = {
    sconv12: 132.60,	
    sconv18: 105.71,	
    sconv24: 93.07,
    sconv36: 82.71,
    sconv48: 81.98,
    sconv60: 80.17
};

// Objeto Constante inclusion financiera HCBC

const IFHCBC = {
    hinc12: 105.17,
    hinc18: 77.49,
    hinc24: 63.94,
    hinc36: 50.95,
    hinc48: 44.98,
    hinc60: 41.78
};

// Arrays donde se almacen los valores de cuotas

const ValorCuotaIFHCBC = [];
const ValorCuotaLCSR = [];
const ValorCuotaLISR = [];

// Funciones para calcular el valor de las cuotas de los creditos + comision por gestion

function CalcCreditIFHCBC (a){
    let resultado;
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc12).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc18).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc24).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc36).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc48).toFixed(2)));
    ValorCuotaIFHCBC.push(parseFloat(resultado =(((a*comision)/1000)*IFHCBC.hinc60).toFixed(2)));
    return ValorCuotaIFHCBC;
}
function CalcCreditLCSR (a){
    let resultado;
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv12).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv18).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv24).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv36).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv48).toFixed(2)));
    ValorCuotaLCSR.push(parseFloat(resultado =(((a*comision)/1000)*LCSR.sconv60).toFixed(2)));
    return ValorCuotaLCSR;
}
function CalcCreditLISR (a){
    let resultado;
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc12).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc18).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc24).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc36).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc48).toFixed(2)));
    ValorCuotaLISR.push(parseFloat(resultado =(((a*comision)/1000)*LISR.sinc60).toFixed(2)));
    return ValorCuotaLISR;
}

// Arrow Function para limpiar los Arrays

const Clear = (Ar) => {
    for (let i = Ar.length; i > 0; i--) {
        Ar.pop();
      }
}

// Filtrar los arrays para obtener el valor de las cuotas coincidente con el plazo deseado

function filterAr (a) {
    let Cuota = [];
    ValorCuotaIFHCBC;
    ValorCuotaLCSR;
    ValorCuotaLISR;
    switch (Vcuota){
        case 12:
            Cuota.push(ValorCuotaIFHCBC[0]);
            Cuota.push(ValorCuotaLCSR[0]);
            Cuota.push(ValorCuotaLISR[0]);
            break;
        case 18:
            Cuota.push(ValorCuotaIFHCBC[1]);
            Cuota.push(ValorCuotaLCSR[1]);
            Cuota.push(ValorCuotaLISR[1]);
            break;
        case 24:
            Cuota.push(ValorCuotaIFHCBC[2]);
            Cuota.push(ValorCuotaLCSR[2]);
            Cuota.push(ValorCuotaLISR[2]);
            break;
        case 36:
            Cuota.push(ValorCuotaIFHCBC[3]);
            Cuota.push(ValorCuotaLCSR[3]);
            Cuota.push(ValorCuotaLISR[3]);
            break;
        case 48:
            Cuota.push(ValorCuotaIFHCBC[4]);
            Cuota.push(ValorCuotaLCSR[4]);
            Cuota.push(ValorCuotaLISR[4]);
            break;
        case 60:
            Cuota.push(ValorCuotaIFHCBC[5]);
            Cuota.push(ValorCuotaLCSR[5]);
            Cuota.push(ValorCuotaLISR[5]);
            break;
    }
    return Cuota;
}


// Funciones para mostrar/ocultar filtro

let valorfilter = false;
let clickFiltro =document.getElementById("textFilter");
let MostrarFiltro = document.getElementById("Filtro");

// clickFiltro.onclick(mostrarocultar(valorfilter));


clickFiltro.onclick = () =>{
    if (valorfilter == false){
        MostrarFiltro.classList.remove('filtronone');
        MostrarFiltro.classList.add('filterview');
    valorfilter = false;
    }else {
        MostrarFiltro.classList.remove('filterview');
        MostrarFiltro.classList.add('filtronone');
        valorfilter = true;
    }
}


// function mostrarocultar (v) {
//     if (v == false){
//             MostrarFiltro.classList.remove('filtronone');
//             MostrarFiltro.classList.add('filterview');
//         valorfilter = false;
//     }else {
//             MostrarFiltro.classList.remove('filterview');
//             MostrarFiltro.classList.add('filtronone');
//         valorfilter = true;
//     }
// }
