import React from 'react';

interface FooterProps {
  leftCount: number;
  onClearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ leftCount, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span>{leftCount} items left</span>
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer; 