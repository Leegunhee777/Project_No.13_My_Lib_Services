import React from 'react';
import Button from '../../../../Components/Common/Button';
import { CodeWrap, ExampleWrap } from '../../styled';
import { ReactComponent as NavSVG } from '../../../../Assets/hambuger.svg';
import { theme } from '../../../../Style/theme';
const ButtonContainer = () => {

  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Button Example</h1>
      <h2 style={{marginTop:'60px'}}>#Filled</h2>
        <ExampleWrap>

        <div style={{display:'flex'}}>
          <Button color='green' width='120px'>버튼</Button>
          <Button color='red' width='120px'>버튼</Button>
          <Button width='120px'>버튼</Button>
          </div>

          <div style={{display:'flex', marginTop:'24px'}}>
          <Button color='green' size='small' width='120px'>
            버튼
          </Button>
          <Button color='red' size='small'  width='120px'>
            버튼
          </Button>
          <Button   size='small' width='120px'>
            버튼
          </Button>
          </div>
        </ExampleWrap>
     
        <CodeWrap>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'green'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'red'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
         
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'green' </span>
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'red' </span>
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>       
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small' </span> 
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
        </CodeWrap>
   

        <h2 style={{marginTop:'60px'}}>#Solid</h2>
        <ExampleWrap>

        <div style={{display:'flex'}}>
          <Button color='green' width='120px'colorReverse={true}>버튼</Button>
          <Button color='red' width='120px' colorReverse={true}>버튼</Button>
          <Button width='120px' colorReverse={true}>버튼</Button>
        </div>

        <div style={{display:'flex', marginTop:'24px'}}>
          <Button color='green' size='small' width='120px' colorReverse={true}>
            버튼
          </Button>
          <Button color='red' size='small'  width='120px' colorReverse={true}>
            버튼
          </Button>
          <Button   size='small'   width='120px' colorReverse={true}>
            버튼
          </Button>
        </div> 
        </ExampleWrap>
     
        <CodeWrap>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'green'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'red'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
         
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'green' </span>
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>        
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'> 'red' </span>
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small'</span>
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
          <li>
            <span className='tag'>{'<'}Button </span>       
            <span className='key'>size</span>
            <span className='string'>=</span>
            <span className='value'> 'small' </span> 
            <span className='key'> width</span>
            <span className='string'>=</span>
            <span className='value'> '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>        
            <span className='string'>    버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>       
          </li>
 
        </CodeWrap>
   

        <h2 style={{marginTop:'60px'}}>#With Icon</h2>
        <ExampleWrap>

          <div style={{display:'flex'}}>
          <Button color='green' width='120px' icon={<NavSVG/>}>
            버튼
          </Button>
          <Button color='red'   width='120px' colorReverse={true} icon={<NavSVG/>} iconPosition='right'>
            버튼
          </Button>
          <Button  width='120px'  colorReverse={true} icon={<NavSVG/>} >
            버튼
          </Button>
          </div>

 
        </ExampleWrap>
     
        <CodeWrap>
        <li>
            <span className='tag'>{'<'}Button </span>
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'>'green'</span>
           <span className='key'>width</span>
            <span className='string'>=</span>
            <span className='value'>  '120px'</span>
            <span className='key'>  icon</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>{'<'}NavSvG/{'>'}</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>
            <span className='string'>버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>
            </li>
            <li>
            <span className='tag'>{'<'}Button </span>
            <span className='key'>color</span>
            <span className='string'>=</span>
            <span className='value'>'red' </span>
            <span className='key'>width</span>
            <span className='string'>=</span>
            <span className='value'>  '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='key'>  icon</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>{'<'}NavSvG/{'>'}</span>
            <span className='outerObject'>{'}'}</span>
            <span className='key'>  iconPosition</span>
            <span className='string'>=</span>
            <span className='value'>'right'</span>
            <span className='tag'>{'>'}</span>
            <span className='string'>버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>
            </li>
          <li>
            <span className='tag'>{'<'}Button </span>
           <span className='key'>width</span>
            <span className='string'>=</span>
            <span className='value'>  '120px'</span>
            <span className='key'>  colorReverse</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
              <span className='value'>true</span>
            <span className='outerObject'>{'}'}</span>
            <span className='key'>  icon</span>
            <span className='string'>=</span>
            <span className='outerObject'>{'{'}</span>
            <span className='value'>{'<'}NavSvG/{'>'}</span>
            <span className='outerObject'>{'}'}</span>
            <span className='tag'>{'>'}</span>
            <span className='string'>버튼</span>
            <span className='tag'>{'<'}/Button{'>'}</span>
            </li>
        </CodeWrap>

    </div>
  )
}

export default ButtonContainer;