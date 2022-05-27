const success = document.querySelector('.success');  
const warning = document.querySelector('.warning');  
const info = document.querySelector('.info');  
let toastContainer;  
function generateToast({  
 message,  
 background = '#00214d',  
 color = '#fffffe',  
 length = '3000ms',  
}){  
 toastContainer.insertAdjacentHTML('beforeend', `<p class="toast"   
  style="background-color:#00214d };  
  color:  hsl(171 100% 13.1%); ;  
  animation-duration: 3000ms">  
  ${message}  
 </p>`)  
 const toast = toastContainer.lastElementChild;  
 toast.addEventListener('animationend', () => toast.remove())  
}  
(function initToast(){  
 document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>  
 <style>  
.toast-container {  
 position: fixed;  
 top: 1rem;  
 right: 1.5rem;  
 display: grid;  
 justify-items: end;  
 gap: 1.5rem;  
}  
.toast {  
 font-size: 1.5rem;  
 font-weight: bold;  
 line-height: 1;  
 padding: 0.5em 1em;  
 background-color: lightblue;  
 animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;  
}  
@keyframes toastIt {  
 0%,  
 100% {  
  transform: translateY(-150%);  
  opacity: 0;  
 }  
 10%,  
 90% {  
  transform: translateY(0);  
  opacity: 1;  
 }  
}  
 </style>  
 `);  
 toastContainer = document.querySelector('.toast-container');  
})()  
success.addEventListener('click', (e) => {  
 generateToast({  
  message: "informacion  enviada",  
  background: "hsl(171 100% 46.1%)",  
  color: "hsl(171 100% 13.1%)",  
  length: "5000ms",  
 })  
})  

function Estadopaciente(peso,altura){
    let IMC=peso/((altura/100)**2);
    let diagnostico;
    if (IMC<18.5){
        diagnostico='peso insuficiente';
    }else if(IMC<24.9&&IMC>18.5){
        diagnostico='peso saludable';
    }else if(IMC<25&&IMC>29.9){
        diagnostico='sobrepeso';
    }else if(IMC>30){
        diagnostico='obesidad';
    }
    return diagnostico
}
function habitos(fuma,ejercicio,toma){
    let calculo=[];
    let resultado='';
    if (fuma.toLowerCase()=="si"){
        calculo.push(fuma)
    }
    if (ejercicio.toLowerCase()=="no"){
        calculo.push(ejercicio)
    }
    if (toma.toLowerCase()=='si'){
        calculo.push(toma)
    }
    if (calculo.length>=2){
        resultado="malos habitos"
    }else {
        resultado='sin adicciones'
    }
    return resultado   
}
function ayudapaciente(diagnostico){
    let titulo=document.createElement('h1');
    titulo.innerHTML="<h1>Diagnostico de paciente</h1>";
    document.body.append(titulo);
    let informacion=document.getElementById('diagnostico');
    if (diagnostico=="malos habitos"){
        informacion.innerText="El paciente se encuentra en una situacion critica recomendamos dirigirse a un centro de salud"

    }else {informacion.innerText="La conducta del paciente es la correcta se recomienda asistir a chequeos medicos preventivos anualmente"
        
    }

}
let peso=prompt('Ingrese su peso en kg: ');
let altura=prompt('ingrese su altura en cm: ');
alert('su diagnostico nutricional relacion peso masa segun la medicion MIC es: ')
alert(Estadopaciente(peso,altura))
let fuma=prompt('es fumador? ');
let ejercicio=prompt('realiza ejercicio?: ');
let toma=prompt("consume alcohol? ")
alert('el paciente tiene una conducta de: ')
alert(habitos(fuma,ejercicio,toma))
let diagnostico=habitos(fuma,ejercicio,toma)
ayudapaciente(diagnostico)