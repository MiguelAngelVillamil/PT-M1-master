"use strict";

function BinarioADecimal(num) {
  
  let decimal = parseInt(num, 2);
  
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
