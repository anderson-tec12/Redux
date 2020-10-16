import React from 'react';
import ReactDOM from 'react-dom'; 


import App from './App';
import './index.css'

//renderizando o componente, dois paametro 1 componente que deve ser renderizado, id de onde vai ser renderizado
ReactDOM.render(<App developer="Anderson B. Silva" />, document.getElementById('root'));
