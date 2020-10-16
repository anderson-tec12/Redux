const PRODUTOS = '_PRODUTOS'

export function errorValidacao(errs){
  this.erros = errs
}

export default class ProdutoService{
  obterIndex(sku){
    let index = null
     this.obterProdutos().forEach((produto, i) => {
       if(produto.sku === sku){
         index = i
       }
     })
    return index
  }

  salvar = (produto)=>{
    this.valida(produto)

    let produtos = localStorage.getItem(PRODUTOS)

    if(!produtos){
      produtos = []
    }else{
      produtos = JSON.parse(produtos) //trandforma string em um array de objetos
    }

    const index = this.obterIndex(produto.sku)
    
    if(index === null){
      produtos.push(produto)
    }else{
      produtos[index] = produto
    }    

    localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
  }

  valida = (produto) => {
    const erros = []

    if(!produto.nome){
      erros.push('O Campo nome é obrigatorio')
    }

    if(!produto.sku){
      erros.push('O Campo SKU é obrigatorio')
    }

    if(!produto.preco || produto.preco <= 0){
      erros.push('O Campo Preço é obrigatorio, deve ser maior que 0')
    }

    if(!produto.fornecedor){
      erros.push('O Campo Fornecedor é obrigatorio')
    }

    if(erros.length > 0 ){
      //lancando um erro
      throw new errorValidacao(erros)
    }
  }

  obterProdutos = () => {
    const produtos = localStorage.getItem(PRODUTOS)
    if(!produtos){
      return []
    }
    return JSON.parse(produtos)
  }

  deletar = (sku) => {
    console.log('chegou no service')
    const index = this.obterIndex(sku)

    console.log('valor do indice', index)
    if(index !== null){
      console.log(' nâo é null')
      const produtos = this.obterProdutos()
      console.log(produtos)
      //jeito apresentado nao funcionaou
      //produtos.slice(index, 1) //pega a posição de um indice e quantos indices vc quer deletar a partir do indice informado

      //by anderson
      const newProdutos = produtos.filter( (produto , i) => {
        if(i !== index )
          return produto
      })
      console.log(newProdutos)
      localStorage.setItem(PRODUTOS, JSON.stringify(newProdutos))

      return newProdutos
    }
  }
}