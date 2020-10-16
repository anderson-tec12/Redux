import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
// import mockData from './data';

//importando a lib que conecta a acaõ com a action creator do reducer
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//action
import {listar, salvar, deletar, alterar} from '../../store/tarefasReduces'
import { esonderMensagem } from '../../store/dialogReducer'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core'



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefaList = (props) => {
  const classes = useStyles();

  useEffect(() =>{
    //listarTarefas()
    props.listar()
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar save={props.salvar}/>
      <div className={classes.content}>
        <TarefasTable 
          Tarefas={props.tarefas} 
          alterarStatus={ props.alterar}
          deleteAction ={ props.deletar }
        />
      </div>
      <Dialog open={props.openDialog} onClose={ props.esonderMensagem}>
        <DialogTitle>Atenção</DialogTitle> 
        <DialogContent>
          { props.mensagem }
        </DialogContent> 
        <DialogActions>
          <button onClick={ props.esonderMensagem}>Fechar</button>  
        </DialogActions> 
      </Dialog>
    </div>
  );
};


// mapear o estado para a propriedade (props)
const mapStateToProps = state => ({
  tarefas: state.tarefas.tarefas,
  mensagem: state.mensagens.msg,
  openDialog: state.mensagens.view
})

//mapeando o dispatch
const mapDispatchToProps = dispatch => bindActionCreators({listar, salvar, deletar, alterar, esonderMensagem}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(TarefaList);
