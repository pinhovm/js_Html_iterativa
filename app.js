class App {
    adicionarProduto() {
        event.preventDefault()
        let nome = document.querySelector("input[name='produto_nome']").value
        let id = document.querySelector("input[name='produto_id']").value
        let valor = document.querySelector("input[name='produto_valor']").value
        let disponibilidade = document.querySelector("input[name='peca-disponivel']").checked
        let produto = new Produto(nome, id, valor, disponibilidade)
        this.addAoCatalogo(produto)
        this.removerDoCatalogo()
    }
    addAoCatalogo(produto) {
        let lista_catalogo = document.createElement("li")
        let info_produto = " ID: " + produto.id + "\nProduto: " + produto.nome + "\nValor: " + produto.valor
        if (produto.disponibilidade) {
            let produtoDisp = this.produtoDisponivel()
            lista_catalogo.appendChild(produtoDisp)
        } else {
            let produtoIndisp = this.produtoIndisponivel()
            lista_catalogo.appendChild(produtoIndisp)
        }
        lista_catalogo.innerHTML += info_produto
        let botaoRemover = this.removerDoCatalogo()
        lista_catalogo.appendChild(botaoRemover)
        document.getElementById("catalogo").appendChild(lista_catalogo)
        document.querySelector("form").reset()
    }

    //pinta o elemento de verde pra dizer que está disponivel

    produtoDisponivel() {
        let produtoDisponivel = document.createElement("span")
        produtoDisponivel.style.color = "green"
        produtoDisponivel.style.backgroundColor = "green"
        produtoDisponivel.innerText = "X "
        return produtoDisponivel
    }
    //pinta o elemento de vermelho pra dizer que está disponivel

    produtoIndisponivel() {
        let produtoIndisponivel = document.createElement("span")
        produtoIndisponivel.style.color = "red"
        produtoIndisponivel.style.backgroundColor = "red"
        produtoIndisponivel.innerText = "X "
        //pinta o elemento de verde pra dizer que está disponivel
        return produtoIndisponivel
    }
    removerDoCatalogo() {
        let botaoRemover = document.createElement("button")
        botaoRemover.setAttribute("onclick", "app.remover()")
        botaoRemover.innerText = "Deletar"
        return botaoRemover
    }
    remover() {
        let li_a_remover = event.target.parentNode
        document.getElementById("catalogo").removeChild(li_a_remover)
        document.getElementById("catalogo").produtoDisponivel.style.backgroundColor = "orange"
    }
}