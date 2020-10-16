import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
// import mockData from './data';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

import axios from 'axios'

const URL_ = 'https://minhastarefas-api.herokuapp.com'
const EMAIL = localStorage.getItem('email_usuario_logado')
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefaList = () => {
  const classes = useStyles();

  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [mensagem, setmensagem] = useState('')

  const salvar_ = (tarefa) => {
      axios.post(`${URL_}/tarefas`, tarefa ,{
        headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
      })
      .then( response => {
        console.log(response.data)
        //listarTarefas()
        const novaTarefa = response.data
        setTarefas([...tarefas, novaTarefa])
        setmensagem('Cadastro realizado com sucesso')
        setOpenDialog(true)
      })
      .catch(e => {
        setmensagem('Ocorreu um erro')
        setOpenDialog(true)
      })
  }

  const listarTarefas = () => {
    axios.get(`${URL_}/tarefas`, {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then(resposta => {
      console.log('As tarefas', resposta.data)
      const lista = resposta.data
      setTarefas(lista)
    })
    .catch(e => {
      setmensagem('Ocorreu um erro')
      setOpenDialog(true)
    })
      
  }

  const alterarStatus = (id) => {
    axios.patch(`${URL_}/tarefas/${id}`,null , {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then(resposta => {
      console.log('Update', resposta.data)
      //const lista = resposta.data
      //setTarefas(lista)
      //listarTarefas()
      const lista = [...tarefas]
      lista.forEach(tarefa => {
        if(tarefa.id === id){
          tarefa.done = true
        }
      });

      setTarefas(lista)
      setmensagem('Item atualizado')
      setOpenDialog(true)
    })
    .catch(e => {
      setmensagem('Ocorreu um erro 2')
      setOpenDialog(true)
    })
  }

  const deletar = (id) => {
    axios.delete(`${URL_}/tarefas/${id}`, {
      headers: { 'x-tenant-id' : localStorage.getItem('email_usuario_logado')}
    })
    .then(resposta => {
      console.log('Update', resposta.data)
      const lista = tarefas.filter(tarefa => tarefa.id !== id)
      
       setTarefas(lista)
       setmensagem('Item deletado')
       setOpenDialog(true)
    })
    .catch(e => {
      setmensagem('Ocorreu um erro 1')
      setOpenDialog(true)
    })
  }



  useEffect(() =>{
    listarTarefas()
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar save={salvar_}/>
      <div className={classes.content}>
        <TarefasTable 
          Tarefas={tarefas} 
          alterarStatus={ alterarStatus}
          deleteAction ={ deletar }
        />
      </div>
      <Dialog open={openDialog} onClose={ e => setOpenDialog(false)}>
        <DialogTitle>Atenção</DialogTitle> 
        <DialogContent>
          { mensagem }
        </DialogContent> 
        <DialogActions>
          <button onClick={ e => setOpenDialog(false)}>Fechar</button>  
        </DialogActions> 
      </Dialog>
    </div>
  );
};

export default TarefaList;
