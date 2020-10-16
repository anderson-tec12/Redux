import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

// import axios from 'axios'

// axios.get('https://minhastarefas-api.herokuapp.com/tarefas', {
//   headers: { 'x-tenant-id' : 'anderson.tec12@gmail.com'}
// })
// .then( resposta => {
//   console.log(resposta.data)
// })
// .catch( (e)=>{
//   console.log(e)
// })


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
