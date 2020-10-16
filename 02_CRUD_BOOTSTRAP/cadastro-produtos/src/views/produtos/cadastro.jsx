import React from 'react'
import { withRouter } from 'react-router-dom'

//logica
import ProdutoService from '../../app/produtoService'


//componentes 
import Card from '../../components/card'

class CadastroProduto extends React.Component{
  state = {
    nome:'',
    sku:'',
    descricao:'',
    preco:0,
    fornecedor:'',
    sucesso:false,
    errors:[],
    atualizando:false
  }

  constructor(){
    super()
    this.service = new ProdutoService()
  }

  onChange = (e) => {
    const novoValor = e.target.value
    const name = e.target.name
  
    this.setState({ [name]: novoValor})
  }

  

  onSubmit = (e) => {
    console.log('estado antes de salvar',this.state)
    
    try{
      
      const produto = {
        nome: this.state.nome,
        sku: this.state.sku,
        descricao: this.state.descricao,
        preco: this.state.preco,
        fornecedor: this.state.fornecedor
      }
  
      this.service.salvar(produto)
      this.setState({sucesso: true})
      this.onClear()
    }catch(errs){
      console.log(errs)
      const errors = errs.erros

      this.setState({errors: errors})
    }
  }

  onClear = (e) => {
    this.setState({
      nome:'',
      sku:'',
      descricao:'',
      preco:0,
      fornecedor:''
    })
  }
  
  componentDidMount(){
    console.log(this.props.match)
    const sku = this.props.match.params.sku

    if(sku){
      const resultado = this.service.obterProdutos().filter( produto => produto.sku === sku) 

      if(resultado.length === 1){
        const produtoEncontrado = resultado[0]

        this.setState({...produtoEncontrado, atualizando:true})
      }
    }
  }

  render(){
    return (
      
      <Card header={this.state.atualizando ? 'Atualização de Produto' : 'Cadastro de Produto'}>       
          {this.state.sucesso &&
            (
              <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Parabens!</strong> Item cadastrado com sucesso.
              </div>
            ) 
          }

          {this.state.errors.length > 0 &&
            this.state.errors.map(msg =>{
              return(
                <div className="alert alert-dismissible alert-danger" key={msg}>
                  <button type="button" className="close" data-dismiss="alert">&times;</button>
                  <strong>Error!</strong> {msg}.
                </div>
              )
            })
          }

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Nome: *</label>
                <input className="form-control" type="text" name="nome" value={this.state.nome} onChange={this.onChange} />
              </div>              
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">SKU: *</label>
                <input className="form-control" type="text" name="sku" value={this.state.sku} onChange={this.onChange} disabled={this.state.atualizando}/>
              </div>             
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">Descrição:</label>
                <textarea className="form-control" name="descricao" id="" value={this.state.descricao} onChange={this.onChange} ></textarea>
              </div>              
            </div>            
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Preco: *</label>
                <input className="form-control" type="text"  name="preco" value={this.state.preco}  onChange={this.onChange} />
              </div>              
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="">Fornecedor: *</label>
                <input className="form-control" type="text" name="fornecedor" value={this.state.fornecedor} onChange={this.onChange}/>
              </div>             
            </div>
          </div>

          <div className="row">
          <div className="col-md-1">
            <button className="btn btn-success" onClick={this.onSubmit}>{this.state.atualizando ? 'Atualizar' : 'Salvar'} </button>
          </div>

          <div className="col-md-1">
            <button className="btn btn-primary"  onClick={this.onClear}>Limpar</button>
          </div>
          <div className="col-md-1">
            <button className="btn btn-dafault">Cancelar</button>
          </div>
        </div>
      </Card>
    )
  }
}

export default withRouter(CadastroProduto)