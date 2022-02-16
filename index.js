const botao = document.querySelector("#add-tarefa");

botao.addEventListener('click', 
function(event){
  event.preventDefault()
  var form = document.querySelector("#adicionar-tarefa")
  var tarefa = form.tarefa.value;
  var data = form.data.value;
  var hora = form.hora.value;
  var prioridade = form.prioridade.value;

  var trTarefa = document.createElement("tr")

  var tdTarefa = document.createElement("td")
  var tdData = document.createElement("td")
  var tdHora = document.createElement("td")
  var tdPrioridade = document.createElement("td")

  tdTarefa.textContent = tarefa
  tdData.textContent = data
  tdHora.textContent = hora
  tdPrioridade.textContent = prioridade

  trTarefa.appendChild(tdTarefa)
  trTarefa.appendChild(tdData)
  trTarefa.appendChild(tdHora)
  trTarefa.appendChild(tdPrioridade)

  var tabela = document.querySelector("#tabela-tarefas")
  tabela.appendChild(trTarefa)

if(prioridade === "alta" || prioridade === "ALTA") {
  tdPrioridade.classList.add("alta")
} else if (prioridade === "moderado" || prioridade === "MODERADO") {
  tdPrioridade.classList.add("moderado")
} else if (prioridade === "baixa" || prioridade === "BAIXA") {
  tdPrioridade.classList.add("baixo")
} else {
}


});