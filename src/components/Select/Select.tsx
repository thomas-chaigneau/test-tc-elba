import React from 'react';
import styles from './Select.module.css';

interface ISelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[]; // sould be { value: 'uniqId, label: sting }
  selectedOption: string;
}

const Select = ({
  onChange,
  options,
  selectedOption,
}: ISelectProps) => {
  return (
    <select className={styles.root} value={selectedOption} onChange={onChange}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Select;
