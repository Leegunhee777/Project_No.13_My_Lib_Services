import React from 'react';
import { Container } from './styled'
import ErrorMessage from '../ErrorMessage';
import {ReactComponent as CounterMinusIcons} from '../../../Assets/counter_minus.svg'
import {ReactComponent as CounterPlusIcons} from '../../../Assets/counter_plus.svg';
import { CSSProperties } from 'styled-components';

interface IProps {
  label?: string
  description?: string
  value?: number
  minValue?: number
  increaseNum?: number
  onChange?: (value: number) => void
  isError?: boolean
  errorMessage?: string
  style?: CSSProperties
}

const Counter: React.FC<IProps> = ({
  label,
  value = 1,
  minValue = 0,
  increaseNum = 1,
  onChange,
  description,
  isError=false,
  errorMessage,
  style,
}) => {
  return (
    <div style={{width:'100%',...style, }} >
      <Container isError={isError}>
        {(label || description) && (
          <label className='counter-label'>
          {label}
          {description && (
            <span className='counter-description'>{description}</span>
          )}
        </label>
        )}

        <div className='counter-contents'>
          <button
            type='button'
            disabled={value === minValue}
            onClick={() => {
              if (onChange) {
                onChange(value - increaseNum)
              }
            }}>
            <CounterMinusIcons />
          </button>
          <p>{value}</p>
          <button
            type='button'
            onClick={() => {
              if (onChange) {
                onChange(value + increaseNum)
              }
            }}>
            <CounterPlusIcons />
          </button>
        </div>
    </Container>
    {(isError && errorMessage) && (
        <ErrorMessage errorMessage={errorMessage}/>
      )}
    </div>

  )
}

export default React.memo(Counter)
