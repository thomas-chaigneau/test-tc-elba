import React from 'react';
import styles from './Button.module.css';

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button = ({
  onClick,
  text
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={styles.root}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
