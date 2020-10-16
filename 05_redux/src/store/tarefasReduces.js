import axios from 'axios'


import { mostarMensagem } from './dialogReducer'

const http = axios.create({
  baseURL: 'https://minhastarefas-api.herokuapp.com'
})

const ACTIONS = {
  LISTAR:'TAREFAS_LISTAR',
  ADD: 'TAREFAS_ADD',
  REMOVER: 'TAREFAS_REMOVE',
  ALTER:'TAREFAS_ALTERAR'
}

const ESTADO_INICIAL = {
  tarefas: [],
  quantidade:0
}

export const tarefaReducer = (state = ESTADO_INICIAL, action) =>{
  switch(action.type){
    case ACTIONS.LISTAR:{
      return {...state, tarefas: action.tarefas, quantidade: action.tarefas.length}
    }
    case ACTIONS.ADD:{
      return {...state, tarefas: [...state.tarefas, action.tarefa], quantidade:state.tarefas.length + 1}
    }
    case ACTIONS.REMOVER:{
      const id = action.ID
      const lista = state.tarefas.filter(tarefa => tarefa.id !== id)
      return {...state, tarefas: lista, quantidade: lista.length }
    }
    case ACTIONS.ALTER:{
      const lista = [...state.tarefas]
      const id = action.ID

      lista.forEach(tarefa => {
        if(tarefa.id === id){
          tarefa.done = true
        }
      });
     
      return {...state, tarefas: lista}
    }
    default:{
      return state
    }
  }
}


export function listar(){
  return dispatch => {
    http.get('/tarefas',{
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    }).then( resposta => {
      dispatch({
        type:ACTIONS.LISTAR,
        tarefas: resposta.data
      })
    })
  }
}

export function salvar(tarefa){
  return dispatch => {
    http.post('/tarefas',tarefa ,{
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then( response => {
      dispatch([
        {
          type: ACTIONS.ADD,
          tarefa: response.data
        },
        mostarMensagem('Tarefa Adicionada')
      ])


    })
  }
}

export function deletar(id){
  return dispatch => {
    http.delete(`/tarefas/${id}`, {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then(resposta => {
      dispatch([{
        type:ACTIONS.REMOVER,
        ID:id
      },mostarMensagem('Tarefa deletada com sucesso')])
    })
  }
}

export function alterar(id){
  return dispatch => {
    http.patch(`/tarefas/${id}`,null,{
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then(resposta => {
      dispatch([{
        type:ACTIONS.ALTER,
        ID:id
      }, mostarMensagem('Tarefa Concluida')])
    })
  }
}
