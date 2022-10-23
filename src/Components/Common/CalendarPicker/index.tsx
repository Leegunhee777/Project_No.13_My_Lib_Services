import React from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from './styled';
import ErrorMessage from '../ErrorMessage';
import {ReactComponent as DatePicker} from '../../../Assets/datepicker.svg';
interface IProps {
  label?: string;
  iconPosition?: 'left' | 'right';
  isError?: boolean;
  errorMessage?: string;
  style?: CSSProperties
}
const CalendarPicker: React.FC<IProps> = ({
  label='시작일',
  iconPosition='right',
  isError=true,
  errorMessage='값을 다시 입력해달라구요!',
  style,
}) => {
  return (
    <Container   
      isError={isError}
      iconPosition={iconPosition}
      style={style}>

      {label && <span className='label'>{label}</span>}   
 
      <button onClick={()=>{console.log('클릭')}}>2023/03/13</button>
         
      
      { isError && errorMessage && (
          <ErrorMessage errorMessage={errorMessage}/>
      )}

    </Container>
  )
}

export default CalendarPicker;

