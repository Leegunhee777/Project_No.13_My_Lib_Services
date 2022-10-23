import React from 'react';
import CheckboxGroup from '../../../../Components/Common/CheckboxGroup';
import { ExampleWrap, CodeWrap } from '../../styled';
const CheckBoxContainer = () => {

  const [state, setState] = React.useState<string[]>([])

  const onChangeConvenienves = (selected: string[]) => {
    setState([...selected])
  };
  const convenienceList = [
    '주방',
    '세탁 공간 - 세탁기',
    '주차',
    '헬스장',
    '수영장',
    '자쿠지',
  ];
  
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Checkbox Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic(col)</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <CheckboxGroup
            label='체크해주세요'
            value={state}
            onChange={onChangeConvenienves}
            options={convenienceList}
            direction='col'
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}CheckboxGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>onChangeConvenienves</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>convenienceList</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'col'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>

      <h2 style={{marginTop:'60px'}}>#Basic(row)</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <CheckboxGroup
          label='체크값은 필수입니다.'
          value={state}
          onChange={onChangeConvenienves}
          options={convenienceList}
          direction='row'
        />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}CheckboxGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>onChangeConvenienves</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>convenienceList</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='value'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'row'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li> 
      </CodeWrap>






      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <CheckboxGroup
          value={state}
          onChange={onChangeConvenienves}
          options={convenienceList}
          direction='col'
          isError={state.length < 1 }
          errorMessage='필수 입력값입니다.'
          style={{marginTop:'2rem'}}
        />     
         <CheckboxGroup
          value={state}
          onChange={onChangeConvenienves}
          options={convenienceList}
          direction='row'
          isError={state.length < 1 }
          errorMessage='필수 입력값입니다.'
          style={{marginTop:'2rem'}}
        />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}CheckboxGroup</span>
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
          <span className='value'>onChangeConvenienves</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>convenienceList</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'col'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state.length</span>
          <span className='string'> {'<'} </span>
          <span className='value'>1</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>'필수 입력값입니다.'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li> 


        <li />

        <li>
          <span className='tag'>{'<'}CheckboxGroup</span>
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
          <span className='value'>onChangeConvenienves</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>convenienceList</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'row'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state.length</span>
          <span className='string'> {'<'} </span>
          <span className='value'>1</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>'필수 입력값입니다.'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li> 
      </CodeWrap>
    </div>
  )
}

export default CheckBoxContainer