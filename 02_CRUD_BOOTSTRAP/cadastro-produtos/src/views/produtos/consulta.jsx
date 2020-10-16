import React from 'react'
import { withRouter} from 'react-router-dom'

//logica
import ProdutoService from '../../app/produtoService'


//componentes 
import Card from '../../components/card'
import TableProdutos from './produtosTable'

 class ConsultaProduto extends React.Component{
  state = {
    produtos:[]
  }

  constructor(){
    super()
    this.service = new ProdutoService()
  }

  componentDidMount(){
    const produtos = this.service.obterProdutos()

    this.setState({produtos})
  }

  preparaEditar = (sku) =>{
    console.log('SKU', sku)
    //redirecionando
    this.props.history.push(`/cadastro-produtos/${sku}`) // veio do withRouter
  }

  deletar = (sku) =>{
    console.log('acionando para deletar')
    const produtos = this.service.deletar(sku)

    this.setState({produtos})
  }

  render(){
    return(
      <Card header="Consuta de Produto">      
          <TableProdutos 
            produtos={this.state.produtos}
            preparaEditar={this.preparaEditar}
            deletar= {this.deletar}
          />      
      </Card>
    )
  }
}

export default withRouter(ConsultaProduto)