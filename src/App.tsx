import React, { useState } from 'react';
import { Todo } from './types/todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import Footer from './components/Footer';
import './App.css';

const filterTodos = (todos: Todo[], filter: 'all' | 'active' | 'completed') => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleAdd = (text: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now().toString(), text, completed: false }
    ]);
  };

  const handleToggle = (id: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleClearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const visibleTodos = filterTodos(todos, filter);
  const leftCount = todos.filter(t => !t.completed).length;

  return (
    <div className="todo-app">
      <h1 className="todo-title">todos</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={visibleTodos} onToggle={handleToggle} />
      <TodoFilters filter={filter} setFilter={setFilter} />
      <Footer leftCount={leftCount} onClearCompleted={handleClearCompleted} />
    </div>
  );
};

export default App;
