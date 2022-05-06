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
    }return diagnostico
}
let peso=prompt('Ingrese su peso en kg: ')
let altura=prompt('ingrese su altura en cm: ')
alert('su diagnostico nutricional relacion peso masa segun la medicion MIC es: ')
alert(Estadopaciente(peso,altura))