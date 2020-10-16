const ESTADO_INICIAL = {
  msg: '',
  view: false
}

export const ACTIONS = {
  MOSTRA_MSG: 'DIALOG_MSG',
  ESCONDER_MSG: 'DIALOG_HIDE'
}

export function msgReducer(state = ESTADO_INICIAL, action){
  switch(action.type){
    case ACTIONS.MOSTRA_MSG:{
      return {...state, msg: action.mensagem, view: true}
    }

    case ACTIONS.ESCONDER_MSG:{
      return {...state, msg:'', view:false}
    }
    default:
      return state
  }
}


export function mostarMensagem(msg){
  return {
    type: ACTIONS.MOSTRA_MSG,
    mensagem:msg
  }
}

export function esonderMensagem(msg){
  return {
    type: ACTIONS.ESCONDER_MSG,
    
  }
}
