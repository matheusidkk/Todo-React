import React, { useState } from 'react';
import './Todo.css';

export default function Todo(props) {
  const [concluida, setConcluida] = useState(false);
  const [concluirBotaoMsn, setConcluirBotaoMsn] = useState('Concluir tarefa');

  function concluirEsta() {
    if (!concluida) {
      props.concluirTarefa(props.todoNome, parseInt(props.todoVezes) + 1);
      setConcluida(true);
      setConcluirBotaoMsn('Tarefa concluída!');
    }
  }

  return (
    <div className="Todo">
      <div>{props.todoID}</div>
      <div>{props.todoNome}</div>
      <div className='vezesTodo'>{props.todoVezes}</div>
      <button
        className="concluirTodo"
        style={{
          background: concluida ? '#fff' : '#FF2E63',
          color: concluida ? '#FF2E63' : '#fff',
        }}
        onClick={concluirEsta}
      >
        {concluirBotaoMsn}
      </button>
      <button className="excluirTodo" onClick={() => props.excluirTarefa(props.todoNome)}>
        X
      </button>
    </div>
  );
}
