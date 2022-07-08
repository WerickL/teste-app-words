const entrada = document.querySelector("#Tinput");
const showScreen = document.querySelector("#tasks");

updateTasks();

function newTask(task, isCompleted){
  if (isEmpty(task)) {
    entrada.value = ''
    entrada.classList.add("isEmpty")
    return
  }else{
    task = task.trim().toLowerCase();
    addTask(task, isCompleted) 
    entrada.value = ''
    return
  }
}

function addTask(task, isCompleted){
  let p = createParagraph(task, isCompleted);
  let i = createIcoTrash()
  let div = document.createElement("div")
  div.classList.add("task")
  div.append(p)
  div.append(i)
  showScreen.append(div);
  showTaskArea()
  attLocalStorage()
}

function createParagraph(texto, isCompleted) {
  let p = document.createElement('p')
  p.innerText = texto;
  p.addEventListener("click", ()=>{
    p.classList.toggle("completed")
    attLocalStorage()
  })
  if (isCompleted) {
    p.classList.add("completed")
  }
  return p
}
function createIcoTrash() {
  let i = document.createElement("i")
  i.classList.add("fa-regular")
  i.classList.add("fa-trash-can")
  i.addEventListener("click", ()=>{
    let pai = i.parentElement
    pai.remove()
    attLocalStorage()
    showTaskArea()
  })
  return i;
}
function showTaskArea() {
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

//Local storage
function attLocalStorage() {
  const tasks = showScreen.childNodes;
  const localStorageTasks = [...tasks].map((task) =>{
    const content = task.firstChild;
    const isCompleted = content.classList.contains("completed");
    return {description : content.innerText, isCompleted};
  })
  localStorage.setItem("task", JSON.stringify(localStorageTasks))
}

function rescueLocalStorageContent() {
  let rescued = localStorage.getItem("task")
  return JSON.parse(rescued)
}
function updateTasks() {
  const tasks = rescueLocalStorageContent();
  for (const task of tasks) {
    console.log(task.description);
    addTask(task.description, task.isCompleted)
  }
}
