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

// Capturar eventos formulario simulacion

    //Capturar mensaje de error html
let mensajeErrorName = document.getElementById('ErrorName');
let mensajeErrorLastName = document.getElementById('ErrorLastName');
let mensajeErrorDni = document.getElementById('ErrorDni');
let mensajeErrorSex = document.getElementById('ErrorSex');
let mensajeErrorMCredit = document.getElementById('ErrorMCredit');
let mensajeErrorCuota = document.getElementById('ErrorCuota');
let btncontinuar = document.getElementById('btncontinuar');

    //Capturar elementos del formulario y validacion

let nombre = document.getElementById('form-nombre');
nombre.onblur = () =>{
    let x = nombre.value;
    if(x == ''){
        mensajeErrorName.classList.remove('noneview');
        mensajeErrorName.classList.add('view');
        nombre.classList.add('ErrorInput');
    }else{
        mensajeErrorName.classList.remove('view');
        mensajeErrorName.classList.add('noneview');
        nombre.classList.remove('ErrorInput');
    }
} 
let apellido = document.getElementById('form-apellido');
apellido.onblur = () =>{
    let x = apellido.value;
    if(x == ''){
        mensajeErrorLastName.classList.remove('noneview');
        mensajeErrorLastName.classList.add('view');
        apellido.classList.add('ErrorInput');
    }else{
        mensajeErrorLastName.classList.remove('view');
        mensajeErrorLastName.classList.add('noneview');
        apellido.classList.remove('ErrorInput');
    }
}

let dni = document.getElementById('form-dni');
dni.onblur = () =>{
    let x = parseInt(dni.value);
    if(isNaN(x)){
        mensajeErrorDni.classList.remove('noneview');
        mensajeErrorDni.classList.add('view');
        dni.classList.add('ErrorInput');
    }else{
        mensajeErrorDni.classList.remove('view');
        mensajeErrorDni.classList.add('noneview');
        dni.classList.remove('ErrorInput');
    }
}

let sexo = document.getElementById('select-sexo');
sexo.onblur = () =>{
    let x = sexo.value;
    if(x == 0){
        mensajeErrorSex.classList.remove('noneview');
        mensajeErrorSex.classList.add('view');
        sexo.classList.add('ErrorInput');
    }else{
        mensajeErrorSex.classList.remove('view');
        mensajeErrorSex.classList.add('noneview');
        sexo.classList.remove('ErrorInput');
    }
}
let mcredit = document.getElementById('form-mcredit');
mcredit.onblur = () =>{
    let x = mcredit.value;
    if(mcredit > 100000 && mcredit < 6000000){
        mensajeErrorMCredit.classList.remove('noneview');
        mensajeErrorMCredit.classList.add('view');
        mcredit.classList.add('ErrorInput');

    }else{
        mensajeErrorMCredit.classList.remove('view');
        mensajeErrorMCredit.classList.add('noneview');
        mcredit.classList.remove('ErrorInput');

    }
}
let selectcuota = document.getElementById('select-cuota');
selectcuota.onblur = () =>{
    let x = selectcuota.value;
    if(x == ''){
        mensajeErrorCuota.classList.remove('noneview');
        mensajeErrorCuota.classList.add('view');
        selectcuota.classList.add('ErrorInput');
    }else{
        mensajeErrorCuota.classList.remove('view');
        mensajeErrorCuota.classList.add('noneview');
        selectcuota.classList.remove('ErrorInput');
    }
} 

 // funcion para valirdar el formulario antes del submit

 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
 })

 function validarFormulario(evento) {
    evento.preventDefault();
    nombre.value;
    if(nombre.length == 0) {
        mensajeErrorName.classList.remove('noneview');
        mensajeErrorName.classList.add('view');
        nombre.classList.add('ErrorInput');
      return;
    }
    apellido.value;
    if (apellido.length > 0 && apellido.length < 20) {
        mensajeErrorLastName.classList.remove('noneview');
        mensajeErrorLastName.classList.add('view');
        apellido.classList.add('ErrorInput');
      return;
    }
    dni.value;
    if (dni.parseInt > 1000000 && dni.parseInt < 99999999){
        mensajeErrorDni.classList.remove('noneview');
        mensajeErrorDni.classList.add('view');
        dni.classList.add('ErrorInput');
        return;
    }

    mcredit.value;
    if(mcredit > 100000 && mcredit < 6000000){
        mensajeErrorMCredit.classList.remove('noneview');
        mensajeErrorMCredit.classList.add('view');
        mcredit.classList.add('ErrorInput');
        return;
    }
    selectcuota.value;
    if(selectcuota > 100000){
        mensajeErrorCuota.classList.remove('noneview');
        mensajeErrorCuota.classList.add('view');
        selectcuota.classList.add('ErrorInput');
        return;
    }
    this.submit();
  }

// Evento para mostrar/ocultar filtro

let valorfilter = false;
let clickFiltro = document.getElementById("textFilter");
let MostrarFiltro = document.getElementById("Filtro");

clickFiltro.onclick = () =>{
    if (valorfilter == false){
        MostrarFiltro.classList.remove('filtronone');
        MostrarFiltro.classList.add('filterview');
        valorfilter = true;
    }else {
        MostrarFiltro.classList.remove('filterview');
        MostrarFiltro.classList.add('filtronone');
        valorfilter = false;
    }
}


// Eventos en el filtro

let filtrovalorrec = document.getElementById('filtrovalorrec');
let filtrovalormenor = document.getElementById('filtrovalormenor');
let filtrovalormayor = document.getElementById('filtrovalormayor');
let filtrobankS = document.getElementById('filtrobankS');
let filtrobankHSBC = document.getElementById('filtrobankHSBC');
let elementfilter1 = document.getElementById('elementfilter1');
let elementfilter2 = document.getElementById('elementfilter2');
let elementfilter3 = document.getElementById('elementfilter3');
let elementfilter4 = document.getElementById('elementfilter4');
let elementfilter5 = document.getElementById('elementfilter5');

// Eliminar elemento del filtro y mostrar el elemento que se esta filtrando

filtrovalorrec.onclick = () =>{
    filtrovalorrec.classList.add('noneview');
    elementfilter1.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}

filtrovalormenor.onclick = () =>{
    filtrovalormenor.classList.add('noneview');
    filtrovalormayor.classList.add('noneview');
    elementfilter2.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrovalormayor.onclick = () =>{
    filtrovalormayor.classList.add('noneview');
    filtrovalormenor.classList.add('noneview');
    elementfilter3.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrobankS.onclick = () =>{
    filtrobankS.classList.add('noneview');
    elementfilter4.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}
filtrobankHSBC.onclick = () =>{
    filtrobankHSBC.classList.add('noneview');
    elementfilter5.classList.remove('noneview');
    MostrarFiltro.classList.remove('filterview');
    MostrarFiltro.classList.add('filtronone');
    valorfilter = false;
}

// eliminar el valor filtrado y volverlo a mostrar en el filtro

elementfilter1.onclick = () =>{
    elementfilter1.classList.add('noneview')
    filtrovalorrec.classList.remove('noneview')
}
elementfilter2.onclick = () =>{
    elementfilter2.classList.add('noneview')
    filtrovalormenor.classList.remove('noneview')
    filtrovalormayor.classList.remove('noneview');
}
elementfilter3.onclick = () =>{
    elementfilter3.classList.add('noneview')
    filtrovalormayor.classList.remove('noneview')
    filtrovalormenor.classList.remove('noneview');
}
elementfilter4.onclick = () =>{
    elementfilter4.classList.add('noneview')
    filtrobankS.classList.remove('noneview')
}

elementfilter5.onclick = () =>{
    elementfilter5.classList.add('noneview')
    filtrobankHSBC.classList.remove('noneview')
}