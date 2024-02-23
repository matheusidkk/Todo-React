import React, { useState } from 'react';
import './CriadorTodo.css';

export default function CriadorTodo(props) {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [vezesTarefa, setVezesTarefa] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Chame a função quando a tecla Enter for pressionada
      props.addTarefa(nomeTarefa, vezesTarefa);
      // Limpe os campos após a criação
      setNomeTarefa('');
      setVezesTarefa(0);
    }
  };

  return (
    <div className="CriadorTodo">
      <button className="criadorFechar" onClick={props.criadorFecharFuncao}>
        v
      </button>
      <div className="nomesInputs">
        <div>Nome</div>
        <div></div>
        <div>Vezes concluida</div>
        <div></div>
      </div>
      <div className="criadorInputs">
        <input
          type="text"
          className="criadorNome"
          placeholder="Nome da tarefa"
          value={nomeTarefa}
          onChange={(e) => setNomeTarefa(e.target.value)}
          onKeyPress={handleKeyPress} // Adiciona o manipulador de eventos para a tecla Enter
        />
        <div></div>
        <input
          type="number"
          className="criadorVezes"
          value={vezesTarefa}
          onChange={(e) => setVezesTarefa(e.target.value)}
          onKeyPress={handleKeyPress} // Adiciona o manipulador de eventos para a tecla Enter
        />
        <div></div>
        <button className="criadorCriar" onClick={() => props.addTarefa(nomeTarefa, vezesTarefa)}>Criar</button>
      </div>
    </div>
  );
}
