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


function revealSort(){
  let sortedMap = new Map([...lista.entries()].sort((a,b)=>b[1]-a[1]))
  const ordenados = Array.from(sortedMap)
 
  for(let i =0; i < Math.min(10, ordenados.length); ++i){
    console.log(ordenados[i][0]);
  }
}
