import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('Добавление новой задачи', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Что нужно сделать/i);
  fireEvent.change(input, { target: { value: 'Тестовая задача' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(screen.getByText('Тестовая задача')).toBeInTheDocument();
});

test('Можно отметить задачу как выполненную', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Что нужно сделать/i);
  fireEvent.change(input, { target: { value: 'Выполнить' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  const item = screen.getByText('Выполнить');
  fireEvent.click(item);
  expect(item.parentElement).toHaveClass('completed');
});

test('Фильтрация задач работает корректно', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Что нужно сделать/i);
  fireEvent.change(input, { target: { value: 'Активная' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  fireEvent.change(input, { target: { value: 'Завершённая' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  // Завершаем вторую задачу
  const doneItem = screen.getByText('Завершённая');
  fireEvent.click(doneItem);
  // Фильтр Active
  fireEvent.click(screen.getByText('Active'));
  expect(screen.getByText('Активная')).toBeInTheDocument();
  expect(screen.queryByText('Завершённая')).not.toBeInTheDocument();
  // Фильтр Completed
  fireEvent.click(screen.getByText('Completed'));
  expect(screen.getByText('Завершённая')).toBeInTheDocument();
  expect(screen.queryByText('Активная')).not.toBeInTheDocument();
  // Фильтр All
  fireEvent.click(screen.getByText('All'));
  expect(screen.getByText('Активная')).toBeInTheDocument();
  expect(screen.getByText('Завершённая')).toBeInTheDocument();
});

test('Очистка завершённых задач работает', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Что нужно сделать/i);
  fireEvent.change(input, { target: { value: 'Очистить' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  const item = screen.getByText('Очистить');
  fireEvent.click(item);
  fireEvent.click(screen.getByText('Clear completed'));
  expect(screen.queryByText('Очистить')).not.toBeInTheDocument();
});

test('Пустой список отображает сообщение', () => {
  render(<App />);
  expect(screen.getByText('Нет задач')).toBeInTheDocument();
}); 