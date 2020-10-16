import React from 'react'

//depedencias para rotas
import { Switch, Route} from 'react-router-dom'

import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'

export default () => {
  return (
    // engloba todas as rotas
      // <HashRouter> foi movida para o app.js pois o componente navbar contem rotas e devem estar emglobado pelo HashRouter
        <Switch>
            <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
            <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
            <Route exact path="/" component={Home} />
            
        </Switch>
      // </HashRouter>
  )
}