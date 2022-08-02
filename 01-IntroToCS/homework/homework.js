"use strict";

function BinarioADecimal(num) {
  
  let binario = num.split("").reverse().join("");
  let decimal = 0;

  for(let c = 0 ; c < binario.length ; c++){
    decimal += parseInt(binario[c] * (2**c));
  }

  return decimal;
}

function DecimalABinario(num) {
  
  let binario = num.toString(2);
  
  return binario;
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
};
