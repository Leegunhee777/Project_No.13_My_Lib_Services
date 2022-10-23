import React, { ChangeEvent } from 'react';
import TextArea from '../../../../Components/Common/TextArea';
import { ExampleWrap, CodeWrap } from '../../styled';
const TextAreaContainer = () => {
  const [state, setState] = React.useState('')
  function onChange(e: ChangeEvent<HTMLTextAreaElement>){
    console.log(e)
    setState(e.target.value)
  }
  console.log(state)
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>TextArea Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <TextArea
            label='설명을 적으시오.'
            value={state}
            onChange={onChange}
            style={{width:'50%'}}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}TextArea</span>
        </li>
        <li> 
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'설명을 적으시오.'</span>
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
          <span className='value'>onChange</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>
          <span className='tag'>{'/>'}</span>
        </li>   
      </CodeWrap> 



      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <TextArea
            label='설명을 적으지오'
            value={state}
            onChange={onChange}
            isError={state === ''}
            errorMessage='이것은 에러머세지 입니다.'
            style={{ width:'50%'}}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}TextArea</span>
        </li>
        <li> 
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'설명을 적으시오.'</span>
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
          <span className='value'>onChange</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>       
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state</span>
          <span className='string'>===</span>
          <span className='value'>''</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>       
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>'이것은 에러메세지 입니다.'</span>
        </li>    
        <li>
          <span className='tag'>{'/>'}</span>
        </li>   
      </CodeWrap> 
    </div>
  )
}

export default TextAreaContainer;