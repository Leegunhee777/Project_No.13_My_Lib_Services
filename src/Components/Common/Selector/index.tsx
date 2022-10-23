import React from 'react';
import { Container } from './styled'

import { ReactComponent as WarningSVG } from '../../../Assets/warning.svg';
import ErrorMessage from '../ErrorMessage';
interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  disabledOptions?: string[];
  options?: string[];
  value?: string;
  isError?: boolean;
  errorMessage?: string;
}

const Selector: React.FC<IProps> = ({
  label,
  disabledOptions = [],
  options = [],
  isError,
  errorMessage,
  style,
  ...props
}) => {
  return (
    <Container isError={!!isError} style={style}>
      <div  className='wrap' >     
        {label && <span className='label'>{label}</span>}   
        
        <select className='select' {...props}>
          {disabledOptions.map((option, index) => (
            <option key={index} value={option} disabled>
              {option}
            </option>
          ))}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        {isError && errorMessage && (
          <ErrorMessage errorMessage={errorMessage}/>
        )}
      </div>
    </Container>
  );
};
export default Selector