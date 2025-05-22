import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  if (todos.length === 0) {
    return <div className="empty-list">Нет задач</div>;
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TodoList; 