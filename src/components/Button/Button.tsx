import styles from './Button.module.css';

const Button = () => {
  return (
    <button
      type="button"
      className={styles.root}
      onClick={() => console.log('clicked')}
    >
      click me
    </button>
  );
};

export default Button;
