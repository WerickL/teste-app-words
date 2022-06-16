//<Variáveis 
let entrada = document.querySelector("#input");
var lista = new Map();


//Função principal 
function newPalavra(palavra){
  palavra = palavra.trim()
  if (repeated(palavra)){
    let valueOf = lista.get(palavra);
    attPalavra(palavra, valueOf)
  }else{
     addPalavra(palavra) 
  }
   entrada.value = ''
}

//Funções componentes 
function addPalavra(palavra){
  lista.set(palavra,1);
}


function repeated(palavra){
  return lista.has(palavra)
}


function attPalavra(key, value){
  lista.set(key, ++value)
}


function sortMap(mapInsort){
  return new Map([...mapInsort.entries()].sort((a,b)=>b[1]-a[1]))
}


 function toArray(map){
   return Array.from(map)
 }
 
 
function showWords(){
  let orderedMap = sortMap(lista);
  let orderedArray = toArray(orderedMap);
  for(let i = 0; i < Math.min(10, orderedArray.length); ++i){
    console.log(orderedArray[i][0]);
  }
}
