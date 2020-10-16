import React, { useState} from 'react';


function UseState() {

  // variaveis de estado
  const [numero, setNumero] = useState(0)
  const [segNumero, setSegNumero] = useState(10)
  const [resultado, setResultado] = useState(15)
  // ou 
  // const [state,setState] = useState({
  //   numero: 0,
  //   segNumero:0,
  //   resultado:0
  // })

  //chama p render novamente 
  
 //criadno uma função dentro de um objeto funcional
 const somar = () => {
  const numeroFormado = parseInt(numero) + parseInt(segNumero)
  setResultado(numeroFormado)
 }


  return (
    <div>
      numero 1: <br />
      <input type="number" value={numero}  onChange={ e => setNumero(e.target.value)} /> <br />
      numero 2:<br />
      <input type="number" value={segNumero}  onChange={ e => setSegNumero(e.target.value)} /><br />
      <button onClick={() => somar()}>Somar</button><br />
      Resultado:<br />
      <input type="number" value={resultado} />
    </div>
  );
}

export default App;
