import React from 'react';

export enum Filter {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}

interface TodoFiltersProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FILTERS = [
  { label: 'All', value: Filter.All },
  { label: 'Active', value: Filter.Active },
  { label: 'Completed', value: Filter.Completed },
];

const TodoFilters: React.FC<TodoFiltersProps> = ({ filter, setFilter }) => (
  <div className="todo-filters">
    {FILTERS.map(f => (
      <button
        key={f.value}
        className={filter === f.value ? 'active' : ''}
        onClick={() => setFilter(f.value)}
        type="button"
      >
        {f.label}
      </button>
    ))}
  </div>
);

export default TodoFilters; 