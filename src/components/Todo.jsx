import React, { useState } from 'react';
import './Todo.css';
import { data } from './data';

export default function Todo(props) {
  const [concluirTarefa, setConcluirTarefa] = useState(data);

  function concluirEsta() {
    if (!props.todoConcluida) {
      props.concluirTarefa(props.todoNome, parseInt(props.todoVezes) + 1);
      setConcluirTarefa(data);
    }
  }

  // Check if the key exists in concluirTarefa before accessing its properties
  const todoInfo = concluirTarefa[props.todoNome] || { concluida: false };

  return (
    <div className="Todo">
      <div>{props.todoID}</div>
      <div>{props.todoNome}</div>
      <div className='vezesTodo'>{props.todoVezes}</div>
      <button
        className="concluirTodo"
        onClick={concluirEsta}
        style={{
          background: props.todoConcluida ? '#fff' : '#ff4674',
          color: props.todoConcluida ? '#ff4674' : '#fff',
        }}
      >
        {props.todoConcluida ? 'Tarefa Feita' : 'Concluir tarefa'}
      </button>
      <button className="excluirTodo" onClick={() => props.excluirTarefa(props.todoNome)}>
        X
      </button>
    </div>
  );
}
