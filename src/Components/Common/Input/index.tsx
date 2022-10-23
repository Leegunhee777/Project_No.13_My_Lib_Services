import React from 'react';
import ErrorMessage from '../ErrorMessage';


import {Container} from './styled'
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  isError?: boolean;
  // checkValidateMode?: boolean
  errorMessage?: string;
  label?: string;
}

const Input: React.FC<IProps> = ({
  label,
  icon,
  iconPosition='right',
  isError = false,
  errorMessage,
  style,
  ...props
}) => {


  return (
    <Container
      iconExist={!!icon}
      isError={isError}
      iconPosition={iconPosition}
      style={style}
    >
    
      {label && <span className='label'>{label}</span>}   
      <div className='inputWrap'>  
        <input {...props} />
        <div className="iconWrap">
          {icon}
        </div>
      </div>       
      { isError && errorMessage && (
          <ErrorMessage errorMessage={errorMessage}/>
      )}


    </Container>
  );
};

export default Input;
