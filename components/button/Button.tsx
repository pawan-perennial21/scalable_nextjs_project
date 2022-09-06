import { HTMLAttributes, ReactElement, ReactNode } from 'react';
// import './Button.css';
import './Button.scss';
export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  // | 'info'
  // | 'light'
  // | 'dark'
  // | 'warning'
  // | 'outline-primary'
  // | 'outline-secondary'
  // | 'outline-danger'
  // | 'outline-success'
  // | 'outline-dark'
  // | 'outline-warning'
  // | 'outline-info'
  // | 'outline-disabled';

  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  children: string | ReactNode | ReactElement;
  isLoading?: boolean;
  onClick?: () => void;
  /* To define id of the button */
  id?: string;
}

const Button: React.FC<IButton> = ({
  variant,
  isLoading,
  size,
  disabled,
  children,
  id,
  onClick,
}) => {
  const classes = `${disabled ? 'disabled' : variant} ${size}`;

  return (
    <button
      type="button"
      id={id}
      onClick={!isLoading ? onClick : undefined}
      className={`${classes} `}
      disabled={disabled}
    >
      {' '}
      {!isLoading ? children : 'loading...'}
    </button>
  );
};

export default Button;
