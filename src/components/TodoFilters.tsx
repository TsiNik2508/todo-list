import React from 'react';

interface TodoFiltersProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ filter, setFilter }) => {
  return (
    <div className="todo-filters">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
      <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
      <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default TodoFilters; 