import React from 'react'

export default (props) => {
  return (

    <table className="table table-hover">
    <thead>
      <tr>
      <th>Nome</th>
      <th>SKU</th>
      <th>Preço</th>
      <th>Fornecedor</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.produtos.map( (produto, indice) => {
          return (
            <tr key={indice}>
              <td>{produto.nome}</td>
              <td>{produto.sku}</td>
              <td>{produto.preco}</td>
              <td>{produto.fornecedor}</td>
              <td>
                <button onClick={ () => props.preparaEditar(produto.sku)} className="btn btn-primary">Editar</button>
                <button onClick={ () => props.deletar(produto.sku)}className="btn btn-danger">Remover</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
</table> 

  )
}