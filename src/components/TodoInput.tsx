import React, { useState } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <input
      className="todo-input"
      type="text"
      placeholder="Что нужно сделать?"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      aria-label="Новое дело"
      autoFocus
    />
  );
};

export default TodoInput; 