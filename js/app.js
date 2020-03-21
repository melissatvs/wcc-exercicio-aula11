// instancia da classe lista
const objetoLista = new Lista()

// botao adicionar
const botaoAdicionar = document.querySelector("#adicionar-item");

// lista de compras
const listaDeCompras = document.querySelector("#lista-de-compras");

// campo de texto
const campoTexto = document.querySelector("#campo-texto");

// botao deletar tudo
const botaoDeletar = document.querySelector("#remover-lista")

// escuta o evento de click no botao de adicionar
botaoAdicionar.addEventListener("click", function () {

  if (botaoAdicionar.classList.contains("botao-adicionar")) {
    objetoLista.adicionaItem(campoTexto.value)
  } else if (botaoAdicionar.classList.contains("botao-editar")) {
    // TODO item ainda fixo, tem que salvar de algum jeito o id
    objetoLista.editarItemDaLista(5, campoTexto.value)
  }

  campoTexto.value = ''
  // chama função monta lista
  objetoLista.montaLista()
})

// escuta o evento click no botao de deletar lista
// irá deletar TODOS OS ITENS DA LISTA
botaoDeletar.addEventListener("click", function () {
  // chama a função deletarLista
  objetoLista.deletarLista();
})

listaDeCompras.addEventListener("click", function (event) {
  
  const itemClicado = event.target.previousSibling.previousElementSibling
  
  if (event.target.classList.contains("deletar")) {
    objetoLista.deletarItemDaLista(event)
  } else if (event.target.classList.contains("editar")) {
    campoTexto.value = itemClicado.innerText
    botaoAdicionar.classList.remove("botao-adicionar")
    botaoAdicionar.classList.add("botao-editar")
    botaoAdicionar.innerText = "Gravar"    
  }  
  
})

window.addEventListener("DOMContentLoaded", () => {
  //objetoLista.montaArray();
  objetoLista.montaLista();
})