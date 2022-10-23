import React from 'react';
import Counter from '../../../../Components/Common/Counter';
import { ExampleWrap, CodeWrap } from '../../styled';
const CounterContainer = () => {
  const [state, setState] = React.useState<number>(0);
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Counter Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Counter
            label="어린이"
            description="2~12세"
            value={state}
            onChange={(count: number) => setState(count)}
            style={{width:'240px'}}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}Couter</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>"어린이"</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>description</span>
          <span className='string'>=</span>
          <span className='value'>"2~12세"</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'('}</span>
          <span className='value'>count</span>
          <span className='string'> : </span>
          <span className='key'>number</span>
          <span className='innerObject'>{")"}</span>
          <span className='string'> {'=>'} </span>
          <span className='value'>setState</span>
          <span className='innerObject'>{'('}</span>
          <span className='key'>count</span>
          <span className='innerObject'>{')'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>



      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Counter
            label="어린이"
            description="2~12세"
            value={state}
            onChange={(count: number) => setState(count)}
            isError={state === 0}
            errorMessage='이것은 문제가 있다고 판단됩니다'
            style={{width:'240px'}}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
      <li>
          <span className='tag'>{'<'}Couter</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>"어린이"</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>description</span>
          <span className='string'>=</span>
          <span className='value'>"2~12세"</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'('}</span>
          <span className='value'>count</span>
          <span className='string'> : </span>
          <span className='key'>number</span>
          <span className='innerObject'>{")"}</span>
          <span className='string'> {'=>'} </span>
          <span className='value'>setState</span>
          <span className='innerObject'>{'('}</span>
          <span className='key'>count</span>
          <span className='innerObject'>{')'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='string'> === </span>
          <span className='value'>0</span>
          <span className='outerObject'>{'}'}</span>
        </li>   
        <li>
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>"이것은 문제가 있다고 판단됩니다."</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>
    </div>
  )
}

export default CounterContainer;