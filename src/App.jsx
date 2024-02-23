import React, { useState } from 'react';
import './App.css';
import { data, updateData } from './components/data.js';

import Todo from './components/Todo.jsx';
import CriadorTodo from './components/CriadorTodo.jsx';

function App() {
  // Estado para gerenciar a criação de tarefas
  const [criandoTarefa, setCriandoTarefa] = useState(false);
  
  // Estado para gerenciar as tarefas
  const [tarefas, setTarefas] = useState(Object.entries(data));

  // Função para atualizar as tarefas
  const atualizarTarefas = (dados) => {
    updateData(dados);
    setTarefas(Object.entries(dados));
  }

  // Funções para adicionar uma tarefas
  const addTarefas = (nomeTarefa, vezesTarefa) => {
    const novosDados = {
      ...data,
      [nomeTarefa]: {
        vezes: vezesTarefa,
        concluida: false
      },
    };
    setCriandoTarefa(false);
    atualizarTarefas(novosDados);
  }

  // Função para concluir uma tarefa
  const concTarefa = (nomeTarefa, vezesTarefa) => {
    console.log(tarefas)
    const novosDados = { ...data,
      [nomeTarefa]: {
        vezes: vezesTarefa,
        concluida: true
      }
    };
    console.log(tarefas)
    updateData(novosDados);
    atualizarTarefas(novosDados);
  }

  // Função para excluir uma tarefa
  const excTarefa = (nomeTarefa) => {
    const novosDados = { ...data };
    delete novosDados[nomeTarefa];
    updateData(novosDados);
    atualizarTarefas(novosDados);
  }

  // Mapear tarefas existentes para componentes Todo
  const todosExistentes = tarefas.map(([nomeTarefa, tarefa], index) => (
    <Todo
      key={index}
      todoID={index}
      todoNome={nomeTarefa}
      todoVezes={tarefa.vezes}
      todoConcluida={tarefa.concluida}
      concluirTarefa={concTarefa}
      excluirTarefa={excTarefa}
    />
  ));

  return (
    <div className="App">
      <main>
        <div className="separacoes">
          <div>ID</div>
          <div>Nome</div>
          <div>Vezes que foi concluída</div>
        </div>
        <div className="tarefas">
          {todosExistentes}
        </div>
        <button
          className="criarTodo"
          style={{
            height: criandoTarefa ? '205px' : '70px',
            cursor: criandoTarefa ? 'default' : 'pointer',
          }}
          onClick={criandoTarefa ? null : () => setCriandoTarefa(true)}
        >
          {criandoTarefa ? 
            <CriadorTodo criadorFecharFuncao={() => setCriandoTarefa(false)} addTarefa={addTarefas}/> : 'Criar tarefa'}
        </button>
      </main>
    </div>
  );
}

export default App;
