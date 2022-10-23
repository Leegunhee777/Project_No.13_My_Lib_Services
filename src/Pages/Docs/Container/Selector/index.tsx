import React from 'react';
import { CodeWrap, ExampleWrap } from '../../styled';
import Selector from '../../../../Components/Common/Selector';

const SelectorContainer = () => {

  const [state, setState] = React.useState({
    largeBuildingType1:'',
    largeBuildingType2:'',
    largeBuildingType3:'',
  })
  
  function onChangeHandler(e: React.ChangeEvent<HTMLSelectElement>){
    const {name, value} = e.target
    setState(prev => ({...prev, [name]:value}))
  }

  //선택 불가능처리된, 큰 범위 건물유형
  const disabledlargeBuildingTypeOptions = ['주거지역']
  
  //default width는 옵션중 최대길이에 맞춰서 selector의 default width가 맞춰진다!
  const largeBuildingTypeList = [
    '아파트',
    '주택',
    '별채',
    '독특한 숙소',
    'B&B',
    '부티크호텔zxcvzxcv',
  ];

  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Selector Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Selector
            name='largeBuildingType1'
            label='주거'
            disabledOptions={disabledlargeBuildingTypeOptions}
            defaultValue='주거지역'
            options={largeBuildingTypeList}
            onChange={onChangeHandler}
            style={{ width: '300px' }}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}Selector</span>
        </li>
        <li> 
          &nbsp;&nbsp;<span className='key'>name</span>
          <span className='string'>=</span>
          <span className='value'>'largeBuildingType1'</span>
        </li>
        <li>       
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'주거'</span>
        </li>
         <li>       
          &nbsp;&nbsp;<span className='key'>disabledOptions</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>disabledlargeBuildingTypeOptions</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>       
          &nbsp;&nbsp;<span className='key'>defaultValue</span>
          <span className='string'>=</span>
          <span className='value'>'주거지역'</span>&nbsp;&nbsp;
        </li>   
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>largeBuildingTypeList</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>  
        <li>       
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>onChangeHandler</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
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

      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Selector
            name='largeBuildingType2'
            label='주거'
            disabledOptions={disabledlargeBuildingTypeOptions}
            defaultValue='주거지역'
            options={largeBuildingTypeList}
            onChange={onChangeHandler}
            isError={state.largeBuildingType2 === ''}
            errorMessage={'주거지역을 입력해주시오!'}
            style={{ width: '300px' }}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
            <span className='tag'>{'<'}Selector</span>
          </li>
          <li> 
            &nbsp;&nbsp;<span className='key'>name</span>
            <span className='string'>=</span>
            <span className='value'>'largeBuildingType2'</span>
          </li>
          <li>       
            &nbsp;&nbsp;<span className='key'>label</span>
            <span className='string'>=</span>
            <span className='value'>'주거'</span>
          </li>
          <li>       
            &nbsp;&nbsp;<span className='key'>disabledOptions</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>disabledlargeBuildingTypeOptions</span>
            <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
          </li>    
          <li>       
            &nbsp;&nbsp;<span className='key'>defaultValue</span>
            <span className='string'>=</span>
            <span className='value'>'주거지역'</span>&nbsp;&nbsp;
          </li>   
          <li>
            &nbsp;&nbsp;<span className='key'>options</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>largeBuildingTypeList</span>
            <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
          </li>   
          <li>       
            &nbsp;&nbsp;<span className='key'>onChange</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>onChangeHandler</span>
            <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
          </li>   
          <li>
            &nbsp;&nbsp;<span className='key'>isError</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>state.largeBuildingType2</span>
            <span className='string'> === </span>
            <span className='value'>''</span>
            <span className='outerObject'>{'}'}</span>
      
          </li>
          <li> 
            &nbsp;&nbsp;<span className='key'>errorMessage</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'> '주거지역을 입력해주시오!'</span>
            <span className='outerObject'>{'}'}</span>
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
      <h2 style={{marginTop:'60px'}}>#Disabled</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Selector
            name='largeBuildingType3'
            label='주거'
            disabledOptions={disabledlargeBuildingTypeOptions}
            defaultValue='주거지역'
            options={largeBuildingTypeList}
            onChange={onChangeHandler}
            disabled={true}
            style={{ width: '300px' }}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
      <li>
          <span className='tag'>{'<'}Selector</span>
        </li>
        <li> 
          &nbsp;&nbsp;<span className='key'>name</span>
          <span className='string'>=</span>
          <span className='value'>'largeBuildingType3'</span>
        </li>
        <li>       
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'주거'</span>
        </li>
         <li>       
          &nbsp;&nbsp;<span className='key'>disabledOptions</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>disabledlargeBuildingTypeOptions</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>    
        <li>       
          &nbsp;&nbsp;<span className='key'>defaultValue</span>
          <span className='string'>=</span>
          <span className='value'>'주거지역'</span>&nbsp;&nbsp;
        </li>   
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>largeBuildingTypeList</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>  
        <li>       
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>onChangeHandler</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
        </li>   
        <li>       
          &nbsp;&nbsp;<span className='key'>disabled</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>true</span>
          <span className='outerObject'>{'}'}</span>&nbsp;&nbsp;
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

export default SelectorContainer;