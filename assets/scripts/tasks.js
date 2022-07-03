const entrada = document.querySelector("#Tinput");
const showScreen = document.querySelector("#tasks");



function newTask(task){
  if (isEmpty(task)) {
    entrada.value = ''
    entrada.classList.add("isEmpty")
    return
  }else{
    task = task.trim().toLowerCase();
    addTask(task) 
    entrada.value = ''
  }
}
function addTask(task){
  let p = createParagraph(task);
  let i = createIcoTrash()
  
  let div = document.createElement("div")
  div.classList.add("task")
  div.append(p)
  div.append(i)
  showScreen.append(div);
  showTaksArea()
}
function createParagraph(texto) {
  let p = document.createElement('p')
  p.innerText = texto;
  p.addEventListener("click", ()=>{
    p.classList.toggle("completed")
  })
  return p
}
function createIcoTrash() {
  let i = document.createElement("i")
  i.classList.add("fa-regular")
  i.classList.add("fa-trash-can")
  i.addEventListener("click", ()=>{
    let pai = i.parentElement
    pai.remove()
    showTaksArea()
  })
  return i;
}
function showTaksArea(params) {
  if(showScreen.getElementsByTagName("div").length === 0){
      showScreen.classList.remove("visible")
  }else  {showScreen.classList.add("visible")}
}
function isEmpty(task){
  task = task.trim()
  if (task.length === 0) {
    return true;
  }else{
    return false;
  }
}
function notEmpty(input) {
  if (!isEmpty(input)) {
    entrada.classList.remove("isEmpty")
  }
}
function isEnter(event) {
  if (event.key === "Enter") {
    newTask(entrada.value)
  } 
}