window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
  let msjcifrado = ""; //variable mensje cifrado

  for (let i = 0; i < string.length; i++) {
    let codeAscii = string.charCodeAt(i); //obtener codigo ascii
       if(codeAscii >=65 && codeAscii <= 90) {
       let cifrado = (codeAscii-65 + parseInt(offset)) % 26 + 65;
       msjcifrado += String.fromCharCode(cifrado);
       } 
      else if(codeAscii >=97 && codeAscii <= 122) {
      let cifrado = (codeAscii-97 + parseInt(offset)) % 26 + 97;
      msjcifrado += String.fromCharCode(cifrado);
      } else {
        msjcifrado+= string[i]
      }
  }
  return msjcifrado;
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
    let msjdescifrado =""; //variable mensaje descifrado
    for (let i = 0; i < string.length; i++) {
      let codeAscii = string.charCodeAt(i); //obtener codigo ascii
       if(codeAscii >=65 && codeAscii <= 90) {
       let descifrado = (codeAscii-65 - parseInt(offset) ) % 26 + 65;
          if (descifrado<65){
            descifrado = descifrado+26;
          }
          msjdescifrado += String.fromCharCode(descifrado);
        }
        else if(codeAscii >=97 && codeAscii <= 122) {
          let descifrado = (codeAscii-97 - parseInt(offset) ) % 26 + 97;
          msjdescifrado += String.fromCharCode(descifrado);
        }else {
          msjdescifrado+= string[i]
        }
    }
  return msjdescifrado; 
 }
};