//reducers
import { combineReducers } from 'redux'


//importndo todos os reducers 
import {tarefaReducer} from './tarefasReduces'
import {msgReducer} from './dialogReducer'

const mainReducer = combineReducers({
  tarefas:tarefaReducer,
  mensagens:msgReducer
})

export default mainReducer
