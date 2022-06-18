//<Variáveis 
const entrada = document.querySelector("#input");
var lista = new Map();
const screen = document.querySelector(".show-words");

//Funções principais 
function newPalavra(palavra){
  if (isEmpty(palavra)) {
    entrada.value = ''
  }else{
    palavra = palavra.trim().toLowerCase();
    if (repeated(palavra)){
      let valueOf = lista.get(palavra);
      attPalavra(palavra, valueOf)
    }else{
       addPalavra(palavra) 
    }
    entrada.value = ''
  }
}
function enter(event) {
  if (event.key === "Enter") {
    newPalavra(entrada.value)
  } 
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
function isEmpty(palavra){
  if (palavra.length === 0) {
    return true;
  }else{
    return false;
  }
  
}

function sortMap(mapInsort){
  return new Map([...mapInsort.entries()].sort((a,b)=>b[1]-a[1]))
}


 function toArray(map){
   return Array.from(map)
 }
 
 
 
function showWords(){
  if (lista.size > 0) {
  clearScreen()
  screen.classList.add("visible")
  let orderedMap = sortMap(lista);
  let orderedArray = toArray(orderedMap);
  for(let i = 0; i < Math.min(10, orderedArray.length); ++i){
    let p = document.createElement('p')
    p.innerText = orderedArray[i][0];
    screen.append(p);
  }
  }   
}
function clearScreen(){
  const tagsP = document.getElementsByTagName('p');
  for(;tagsP.length > 0;){
    tagsP[0].remove();
  }
}
