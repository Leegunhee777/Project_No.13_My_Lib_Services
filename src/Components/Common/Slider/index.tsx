import React, { ChangeEvent } from 'react';
import { CSSProperties } from 'styled-components';
import { Container } from './styled';
import ErrorMessage from '../ErrorMessage';

interface Iprops {
  label?: string;
  limitRange: number[];
  valueRange:number[];
  unit:string;
  onChange:(e:ChangeEvent, newValue:number[])=>void |undefined
  isError?: boolean;
  errorMessage?: string;
  style?: CSSProperties
}

const Slider:React.FC<Iprops> = ({
  label,
  unit,
  limitRange=[0,100],
  valueRange=[45,45],
  onChange,
  isError=false,
  errorMessage='이것은 에러입니다',
  style,
}) => {

  const getLeftThumbPercent = () => {
    return (( valueRange[0] - (limitRange[0])) / ((limitRange[1]) - limitRange[0])) * 100;
  };
  const getRightThumbPercent = () => {
    return ((  valueRange[1] - (limitRange[0])) / (limitRange[1] - limitRange[0])) * 100;
  };


  function changeHandler(e: ChangeEvent<HTMLInputElement>){
    
    const { name, value} = e.target
    let updatedValue:number = parseInt(value);
  
    if(name === 'lowValue') {
       updatedValue = Math.min(parseInt(value), (valueRange[1]) - 1);
       return onChange(e, [updatedValue,valueRange[1]])
    } 
    updatedValue = Math.max(parseInt(value) , (valueRange[0] +1) );
    return onChange(e, [valueRange[0],updatedValue])
    
  }

  return (
    <Container leftPercent={getLeftThumbPercent()} rightPercent={getRightThumbPercent()} style={style}>
        {label && (
          <div className='labelWrap'>
            <span className='label'>{label}</span>
            <span className='label'>{valueRange[0]} ~ {valueRange[1]} {unit}</span>
          </div>
        )}   
      <div className="wrap">
    
          <input type="range" name='lowValue'  min={limitRange[0]} max={limitRange[1]} value={valueRange[0]} onChange={changeHandler} />
          <input type="range" name='highValue' min={limitRange[0]} max={limitRange[1]} value={valueRange[1]} onChange={changeHandler} />

          <div className='fakeSlider'>
            <div className="base"></div>
            <div className="range"></div>
            <div className="thumb left"></div>
            <div className="thumb right"></div>
          </div>
        <div className='rangeWrap'>
          <span className='label'>
            {limitRange[0]}
          </span>
          <span className='label'>
          {limitRange[1]}
          </span>
        </div>
     
      </div>
      {isError && errorMessage && (
          <ErrorMessage errorMessage={errorMessage}/>
        )}
    </Container>
  )
}

export default Slider