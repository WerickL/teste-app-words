let frase = document.querySelector("#input");
let palavras = new Array;
function showFrase() {
  palavras.push(frase.value)
  frase.value = ''
}
function revealSort(){
  for(let palavra of palavras){
    console.log(palavra)
  }
}
