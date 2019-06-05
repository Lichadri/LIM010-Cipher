/* Acá va tu código */
//variables de la primera vista y obtener elemento
const inicio=document.getElementById('inicio');//id de div
const contrasenaCorrect=document.getElementById("contrasena")
const btn= document.getElementById("btn");
//variables para la segunda vista
const saludo=document.getElementById('saludo');//id de 2° div
const bienvenido=document.getElementById('nombre');//estilo que se mostrar
const error =document.getElementById("error");
const msjbloqueado = document.getElementById("msjbloqueado");


//variable contador
let cont=0;
let total=3;

//funcion para monstrar la segunda vista
btn.addEventListener("click", () =>{
    const rpta = contrasenaCorrect.value;
    if(rpta=== "LABORATORIA" ){
    //mostrar y oculta para la segunda vista
    inicio.style.display="none"
    saludo.style.display="block"
    error.style.display="none"
    }
    else{
    error.style.display="block"
    cont++
    alert(cont)
    if( cont===3){
    msjbloqueado.style.display="block"
    error.style.display="none"
    saludo.style.display="none"
    inicio.style.display="none"
    }
    }
     
  });
