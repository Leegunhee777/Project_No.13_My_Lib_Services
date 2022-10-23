import React from 'react';
import {Container} from './styeld'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'green' | 'red' | string
  colorReverse?: boolean;
  size?: 'small' | 'medium';
  width?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
}
const Button: React.FC<IProps> = ({
  children,
  color,
  width,
  colorReverse = false,
  icon,
  size = 'medium',
  iconPosition = 'left',
  ...props
}) => {
  return (
    <Container
      {...props}
      color={color}
      width={width}
      colorReverse={colorReverse}
      size={size}
      iconPosition={iconPosition}
    >
      {iconPosition === 'left' && icon}
      {children}
      {iconPosition === 'right' && icon}
    </Container>
  );
};


export default Button;