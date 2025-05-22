import React from 'react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => (
  <li
    className={`todo-item${todo.completed ? ' completed' : ''}`}
    tabIndex={0}
    onClick={() => onToggle(todo.id)}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onToggle(todo.id); }}
    aria-checked={todo.completed}
    role="checkbox"
    aria-label={todo.text}
  >
    <span className={`checkmark${todo.completed ? ' checked' : ''}`}>{todo.completed ? '✔' : ''}</span>
    <span className="todo-text">{todo.text}</span>
  </li>
);

export default TodoItem; 