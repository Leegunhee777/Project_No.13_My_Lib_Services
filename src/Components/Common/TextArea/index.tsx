import React, { ChangeEvent } from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from './styled';
import ErrorMessage from '../ErrorMessage';

interface IProps {
  label?: string;
  value?: string;
  onChange?: (e:ChangeEvent<HTMLTextAreaElement>) => void;
  isError?: boolean 
  errorMessage?: string;
  style?: CSSProperties
}
const TextArea:React.FC<IProps> = ({
  label,
  value,
  onChange,
  isError,
  errorMessage,
  style,
}) => {
  console.log(isError)

  return (
    <Container style={style} isError={!!isError}>
      {label && <span className='label'>{label}</span>}   

      <textarea rows={10} onChange={onChange} value={value} />
      
      {isError && errorMessage && (
          <ErrorMessage errorMessage={errorMessage}/>
      )}
    </Container>
  )
}

export default TextArea;