import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  IconButton
} from '@material-ui/core';

import TimerIcon from '@material-ui/icons/Timer'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import DeleteIcon from '@material-ui/icons/Delete'

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const TarefasTable = props => {
  const { className, Tarefas, ...rest } = props;

  const classes = useStyles();



  // const handleSelectAll = event => {
  //   const { Tarefas } = props;

  //   let selectedTarefas;

  //   if (event.target.checked) {
  //     selectedTarefas = Tarefas.map(user => user.id);
  //   } else {
  //     selectedTarefas = [];
  //   }

  //   setSelectedTarefas(selectedTarefas);
  // };

  

  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Tarefas.map( tarefa => {
                  return (
                    <TableRow key={tarefa.id}>
                      <TableCell>{tarefa.id}</TableCell>
                      <TableCell>{tarefa.descricao}</TableCell>
                      <TableCell>{tarefa.categoria}</TableCell>
                      <TableCell>{tarefa.done ? 'Concluida' : 'Pedente'}</TableCell>
                      <TableCell>
                        <IconButton color="secondary" onClick={e => props.alterarStatus(tarefa.id)}>
                          {tarefa.done ? 
                            (
                              <DoneAllIcon />
                            ): 
                            (
                              <TimerIcon/>
                            )

                          }
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={ e => props.deleteAction(tarefa.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })

                }
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      
    </Card>
  );
};

TarefasTable.propTypes = {
  className: PropTypes.string,
  Tarefas: PropTypes.array.isRequired
};

export default TarefasTable;
