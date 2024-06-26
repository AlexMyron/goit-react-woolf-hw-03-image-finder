import css from './Button.module.css';

const Button = (props) => {
  return <button className={css.button} {...props}>Load More</button>;
};

export default Button;
