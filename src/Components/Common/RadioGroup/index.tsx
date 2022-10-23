

import React from 'react';
import { Container } from './styled'
import ErrorMessage from '../ErrorMessage'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: any;
  onChange?: (value: any) => void;
  options?: { label: string; value: any; description?: string }[];
  isError?: boolean | null;
  errorMessage?: string;
  direction?: string;
}

const RadioGroup: React.FC<IProps> = ({
  label,
  value,
  options = [],
  onChange,
  isError= false,
  errorMessage = '옵션을 선택하세요',
  direction = 'col',
  ...props
}) => {
  
  return (
    <Container isError={isError} direction={direction} {...props}>
      {label && <p className="radio-label">{label}</p>}
      <div className="radio-list-wrapper">
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              checked={value === option.value}
              onChange={() => onChange && onChange(option.value)}
            />
            <span>
              {option.label}
              {option.description && (
                <span className="radio-description">{option.description}</span>
              )}
            </span>
          </label>
        ))}
      </div>
      {isError && errorMessage && (
        <ErrorMessage errorMessage={errorMessage}/>
      )}
    </Container>
  );
};

export default React.memo(RadioGroup);
