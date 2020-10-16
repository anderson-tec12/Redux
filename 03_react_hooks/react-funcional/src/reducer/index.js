import React, { useState} from 'react';

//store
import useStore from './somaReducer'
function ReducerHook() {

  // variaveis de estado
  const [numero, setNumero] = useState(0)
  const [segNumero, setSegNumero] = useState(0)
  
  const [store, dispatch] = useStore()
  
  const somar = () => {
    const numeroFormado = parseInt(numero) + parseInt(segNumero)
    //setResultado(numeroFormado)
    console.log('Dispachando a action 1')
    dispatch({
      type:"SOMA",
      payload: numeroFormado
    })
  }

  const subtrair = () => {
    const numeroFormado = parseInt(numero) - parseInt(segNumero)
    //setResultado(numeroFormado)
    console.log('Dispachando a action 1')
    dispatch({
      type:"SUBTRACAO",
      payload: numeroFormado
    })
  }

  return (
    <div>
      numero 1: <br />
      <input type="number" value={numero}  onChange={ e => setNumero(e.target.value)} /> <br />
      numero 2:<br />
      <input type="number" value={segNumero}  onChange={ e => setSegNumero(e.target.value)} /><br />
      <button onClick={somar}>Somar</button><br />
      <button onClick={subtrair}>subtrair</button><br />
      Resultado:<br />
      <input type="number" value={store.resultado} readOnly/>
    </div>
  );
}

export default ReducerHook;
