import React from 'react';
import { CSSProperties } from 'styled-components';
import { Container, Label } from './styled';
import ErrorMessage from '../ErrorMessage'

interface IProps {
  label?: string;
  value?: string[];
  onChange: (selected: string[]) => void;
  options?: string[];
  direction?: 'col' | 'row';
  isError?:boolean;
  errorMessage?:string;
  style?: CSSProperties;
}

const CheckboxGroup: React.FC<IProps> = ({
  label,
  value = [],
  onChange,
  options = [],
  direction = 'col',
  isError = false,
  errorMessage ='이것은 에러메세지 입니다!',
  style,
}) => {
  return (
    <div style={style}>    
      {label && <Label>{label}</Label>}
      <Container direction={direction} isError={isError}>
        {options.map(option => (
          <label className="checkbox-label" key={option}>
            <input
              type="checkbox"
              checked={value?.includes(option)}
              onChange={e => {
                if (e.target.checked) {
                  onChange([...value, option]);
                } else {
                  onChange(value.filter(option_ => option_ !== option));
                }
              }}
            />
            <span /> {option}
          </label>
        ))}
      </Container>
      {isError && errorMessage && (
        <ErrorMessage errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default CheckboxGroup;
