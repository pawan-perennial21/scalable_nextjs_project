import { IButton } from './Button';

const button: IButton = {
  variant: 'primary',

  size: 'small',
  disabled: false,
  children: 'Button',
  isLoading: false,
};
const primary: IButton = {
  variant: 'primary',

  size: 'medium',
  disabled: false,
  children: 'Button',
  isLoading: false,
};
const secondary: IButton = {
  variant: 'secondary',

  size: 'small',
  disabled: false,
  children: 'Button',
  isLoading: false,
};
const success: IButton = {
  variant: 'success',

  size: 'small',
  disabled: false,
  children: 'Button',
  isLoading: false,
};
const danger: IButton = {
  variant: 'danger',
  size: 'small',
  disabled: false,
  children: 'Button',
  isLoading: false,
};

export const mockButtonProps = {
  button,
  primary,
  secondary,
  success,
  danger,
};
