class Lista {
   
   constructor() {
      // crio a propriedade listaDeCompras
      this.listaDeCompras = document.querySelector("#lista-de-compras");
      // crio a propriedade arrayDeItens
      this.arrayDeItens = [];
      
      this.url = "http://localhost:3000/lista"
   }
   
   montaLista = async () => {
      const requisicao = { method: 'get' }
      let conteudo = ''
      
      await fetch(this.url, requisicao)
      .then(resposta => resposta.json())
      .then(dados => this.arrayDeItens = dados)
      
      this.arrayDeItens.forEach(item => {
         conteudo += `
         <li id="${item.id}">${item.name}</li>
         <button class="botao editar">EDIT</button>
         <button class="botao deletar">DEL</button>
         `
      })
      
      this.listaDeCompras.innerHTML = conteudo
   }
   
   adicionaItem = async (item) => {
      const requisicao = {
         headers: { "Content-Type": "application/json" },
         method: 'post',
         body: JSON.stringify({
            name: item
         })
      }
      
      await fetch(this.url, requisicao)
      .then(resposta => resposta.json())
      .then(dados => this.arrayDeItens = dados)
   }
   
   deletarItemDaLista = async (event) => {
      const itemClicado = event.target.previousSibling.previousElementSibling
      
      if (event.target.classList.contains("deletar")) {
         
         if (confirm("Deseja realmente excluir?")) {
            
            event.target.parentElement.remove()
            
            const requisicao = { method: 'delete' }
            
            // TODO ver como é o "escape" da contrabarra no template string
            await fetch(this.url + "/" + itemClicado.id, requisicao)
            .then(resposta => resposta.json())
            .then(dados => this.arrayDeItens = dados)
         }
      }
      
   }
   
   editarItemDaLista = async (id, valor) => {
      const requisicao = {
         headers: { "Content-Type": "application/json" },
         method: 'put',
         body: JSON.stringify({
            name: valor,
            id: id
         })
      }
      
      // aguardo a requisição finalizar
      await fetch(this.url + "/" + id, requisicao)
      .then(resposta => resposta.json())
      .then(dados => this.arrayDeItens = dados)
   } 
   
   /* 
   // TODO excluir tudo, ver se posso chamar a deletarItemDaLista e se essa tem que ser async também
   deletarLista = () => {
      if (confirm("Deseja realmente excluir TODA lista?")) {
         this.listaDeCompras.forEach(item, index) {
            
         }
      }
   }*/
}