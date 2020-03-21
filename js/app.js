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
  // chama função adicionaNaLista passando o valor do campo de texto
  objetoLista.adicionaItem(campoTexto.value);
  // limpa o campo de texto adicionando uma string vazia
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

// escuta o click no elemento da lista de compras
// irá deletar apenas UM ITEM DA LISTA
listaDeCompras.addEventListener("click", function (event) {
  // chama a função deletarItemDaLista passando o parametro event
  objetoLista.deletarItemDaLista(event)
})

window.addEventListener("DOMContentLoaded", () => {
  //objetoLista.montaArray();
  objetoLista.montaLista();
})