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
let ta1 = document.getElementById("ta1"); // tabla de texto
let cifrar = document.getElementById("cifrar"); //boton cifrar
let offset1 = document.getElementById("offset");
let ta2 = document.getElementById("ta2");
let descifrar = document.getElementById("descifrar")
//variable contador
let cont=0;
let total=3;

//Evento para monstrar la segunda vista
btn.addEventListener("click", () =>{
    const rpta = contrasenaCorrect.value;
    if(rpta=== "LABORATORIA" ){
    //mostrar y oculta para la segunda vista
    inicio.classList.add('hide')
    saludo.classList.remove('hide')
    error.classList.add('hide')
    }
    else{
    error.classList.remove('hide')
    cont++
    if( cont >= 3){
    msjbloqueado.classList.remove('hide')
    error.classList.add('hide')
    saludo.classList.add('hide')
    inicio.classList.add('hide')
    }
    }
     
  });

//Evento para cifrar
cifrar.addEventListener("click",() =>{
  let string = ta1.value;
  let offset = offset1.value;
//encode: (offset, string) => {
  let msjcifrado = ""; //variable mensje cifrado

  for (let i = 0; i < string.length; i++) {
    let codeAscii = string.charCodeAt(i); //obtener codigo ascii
    //console.log(codeAscii);
       if(codeAscii >=65 && codeAscii < 90) {
       let cifrado = (codeAscii-65 + offset) % 26 + 65;
       msjcifrado += String.fromCharCode(cifrado);
    // 
  }
  console.log(msjcifrado)
  }
  ta2.value = msjcifrado;
  });
  //Evento para descifrar
  descifrar.addEventListener("click", () =>{
    let string = ta1.value;
    let offset = offset1.value;

    let msjdescifrado =""; //variable mensaje descifrado
    for (let i = 0; i < string.length; i++) {
      let codeAscii = string.charCodeAt(i); //obtener codigo ascii
    //console.log(codeAscii);
       if(codeAscii >=65 && codeAscii < 90) {
       let descifrado = (codeAscii-65 - offset) % 26 + 65;
       msjdescifrado += String.fromCharCode(descifrado);
       }
       ta2.value = msjdescifrado;
      }
      });
    




  // for ( let i = 0; i < string.lenght; i++) {
  //   let codeAscii= string.charCodeAt(i) //obtener codigo ascii
  //   if(codeAscii ===65) {
  //    let cifrado = (codeAscii-65 + offset) % 26 + 65;
  //    msjcifrado += String.fromCharCode(cifrado);
  // }
  //return msjcifrado;

