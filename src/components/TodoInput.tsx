import React, { useState, useRef, useEffect } from 'react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      onAdd(value.trim());
      setValue('');
      inputRef.current?.focus();
    }
  };

  return (
    <input
      ref={inputRef}
      className="todo-input"
      type="text"
      placeholder="Что нужно сделать?"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      aria-label="Новое дело"
    />
  );
};

export default TodoInput; 