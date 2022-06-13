let entrada = document.querySelector("#input");
var lista = new Map();
function execução (){
  newPalavra(entrada.value)
  entrada.value = ''
}
const newPalavra= function (palavra){
  if (repeated(palavra)){
    let valueOf = lista.get(palavra);
    attPalavra(palavra, valueOf)
  }else{
     addPalavra(palavra) 
  }
}
function addPalavra(palavra){
  lista.set(palavra,1);
}
function repeated(palavra){
  return lista.has(palavra)
}
function attPalavra(key, value){
  lista.set(key, ++value)
}

function showFrase() {

}
function revealSort(){
  for(let palavras of lista){
    console.log(palavras)
  }
}
