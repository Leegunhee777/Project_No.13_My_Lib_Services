import React, { ChangeEvent } from 'react';
import Slider from '../../../../Components/Common/Slider';
import { CodeWrap, ExampleWrap } from '../../styled';
const SliderContainer = () => {
  const [value, setValue] = React.useState([0,0]);

  const handleChange= (e:ChangeEvent, newValue:number[])=>{
    console.log(e)
    console.log(newValue)
    setValue(newValue);
  }
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Range Slider Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Slider
            label='가격'
            unit='원'
            limitRange={[0,1000]}
            valueRange={value}
            onChange={handleChange}
            isError={true}
            errorMessage='필수 입력값입니다.'
            style={{width:'400px'}}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}Slider</span>
        </li>
        <li> 
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'가격'</span>
        </li>
        <li>       
          &nbsp;&nbsp;<span className='key'>unit</span>
          <span className='string'>=</span>
          <span className='value'>'원'</span>
        </li>
         <li>       
          &nbsp;&nbsp;<span className='key'>limitRange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>{'['}0,1000{']'}</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>       
          &nbsp;&nbsp;<span className='key'>valueRange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='outerObject'>{'}'}</span>

        </li>   
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>handleChange</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>  
        <li>       
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>true</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>   
        <li>       
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>'필수 입력값입니다.'</span>
        </li>   
        <li>       
          &nbsp;&nbsp;
          <span className='key'>style</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'{'}</span>
          <span className='key'>width:</span>
          <span className='value'>'300px'</span>
          <span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li> 
        <li>
          <span className='tag'>{'/>'}</span>
        </li>   
      </CodeWrap>
    </div>
  )
}

export default SliderContainer;