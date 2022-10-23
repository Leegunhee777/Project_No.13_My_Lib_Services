import React from 'react';
import { ExampleWrap, CodeWrap } from '../../styled';
import RadioGroup from '../../../../Components/Common/RadioGroup';
import { getValue } from '@testing-library/user-event/dist/utils';

const RadioGroupContainer = () => {
  const [bathRoomType, setBathRoomType] =
  React.useState<'private' | 'public' | null>(null);

const [roomType, setRoomType] = React.useState<string | null>(null);

  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Radio Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic(col)</h2>
      <ExampleWrap>
        <div style={{
          display:'flex', 
          width:'100%', 
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems: 'center'
        }}>
          <RadioGroup
            label="게스가 단독으로 사용하는 욕실인가요?"
            value={bathRoomType}
            onChange={value => {
              setBathRoomType(value);
            }}
            options={[
              { value: 'private', label: '예' },
              { value: 'public', label: '아니요, 공용입니다.' },
            ]}
          />
          <RadioGroup
            label="게스트가 묵게 될 숙소 유형을 골라주세요"
            value={roomType}
            onChange={(value) => {
              setRoomType(value);
            }}
            options={[
              {
                value: 'entire',
                label: '집 전체',
                description:
                  '게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 사용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다.',
              },
              {
                value: 'private',
                label: '개인실',
                description:
                  '게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다.',
              },
              {
                value: 'public',
                label: '다인실',
                description:
                  '게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다.',
              },
            ]}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}RadioGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'게스가 단독으로 사용하는 욕실인가요?'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>bathRoomType</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='string'>{'=>'}</span>
          <span className='innerObject'>{'{'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='value'>setBathRoomType</span>
          <span className='string'>{'('}</span>
          <span className='value'>value</span>
          <span className='string'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'['}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'private'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'예'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'public'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'아니요, 공용입니다'</span>
          <span className='outerObject'>{'}'}</span>
      
        </li>
        <li>
        &nbsp;&nbsp;<span className='innerObject'>{']'}</span>
        <span className='outerObject'>{'}'}</span>
     
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>

        <li/>

        <li>
          <span className='tag'>{'<'}RadioGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'게스트가 묵게 될 숙소 유형을 골라주세요'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>roomType</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='string'>{'=>'}</span>
          <span className='innerObject'>{'{'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='value'>setRoomType</span>
          <span className='string'>{'('}</span>
          <span className='value'>value</span>
          <span className='string'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'['}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'entire'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'집전체'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 사용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'private'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'개인실'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'public'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'다인실'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{']'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>


      <h2 style={{marginTop:'60px'}}>#Basic(row)</h2>
      <ExampleWrap>
        <div style={{
          display:'flex', 
          width:'100%', 
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems: 'center'
        }}>
          <RadioGroup
            label="게스가 단독으로 사용하는 욕실인가요?"
            value={bathRoomType}
            onChange={value => {
              setBathRoomType(value);
            }}
            options={[
              { value: 'private', label: '예' },
              { value: 'public', label: '아니요, 공용입니다.' },
            ]}
            direction='row'
          />
          <RadioGroup
            label="게스트가 묵게 될 숙소 유형을 골라주세요"
            value={roomType}
            onChange={(value) => {
              setRoomType(value);
            }}
            options={[
              {
                value: 'entire',
                label: '집 전체',
                description:
                  '게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 사용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다.',
              },
              {
                value: 'private',
                label: '개인실',
                description:
                  '게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다.',
              },
              {
                value: 'public',
                label: '다인실',
                description:
                  '게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다.',
              },
            ]}
            direction='row'
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}RadioGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'게스가 단독으로 사용하는 욕실인가요?'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>bathRoomType</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='string'>{'=>'}</span>
          <span className='innerObject'>{'{'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='value'>setBathRoomType</span>
          <span className='string'>{'('}</span>
          <span className='value'>value</span>
          <span className='string'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'['}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'private'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'예'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'public'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'아니요, 공용입니다'</span>
          <span className='outerObject'>{'}'}</span>
      
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{']'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'row'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>

        <li/>

        <li>
          <span className='tag'>{'<'}RadioGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'게스트가 묵게 될 숙소 유형을 골라주세요'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>roomType</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='string'>{'=>'}</span>
          <span className='innerObject'>{'{'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='value'>setRoomType</span>
          <span className='string'>{'('}</span>
          <span className='value'>value</span>
          <span className='string'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'['}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'entire'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'집전체'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트가 숙소 전체를 다른 사람과 공유하지 않고 단독으로 사용합니다. 일반적으로 침실, 욕실, 부엌이 포함됩니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'private'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'개인실'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트에게 개인 침실이 제공됩니다. 침실 이외의 공간은 공용일 수 있습니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'public'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'다인실'</span>
          <span className='string'>,</span>
          <span className='key'>description: </span>
          <span className='value'>'게스트는 개인 공간 없이, 다른 사람과 함께 쓰는 침실이나 공용공간에서 숙박합니다.'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{']'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>direction</span>
          <span className='string'>=</span>
          <span className='value'>'row'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>

      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{
          display:'flex', 
          width:'100%', 
          flexDirection:'column', 
          justifyContent:'center', 
          alignItems: 'center'
        }}>
          <RadioGroup
            label="게스가 단독으로 사용하는 욕실인가요?"
            value={bathRoomType}
            onChange={value => {
              console.log(value);
              setBathRoomType(value);
            }}
            options={[
              { value: 'private', label: '예' },
              { value: 'public', label: '아니요, 공용입니다.' },
            ]}
            isError={bathRoomType === null}
            errorMessage={'필수옵션입니다'}
          />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}RadioGroup</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'게스가 단독으로 사용하는 욕실인가요?'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>bathRoomType</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>value</span>
          <span className='string'>{'=>'}</span>
          <span className='innerObject'>{'{'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='value'>setBathRoomType</span>
          <span className='string'>{'('}</span>
          <span className='value'>value</span>
          <span className='string'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{'}'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>options</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='innerObject'>{'['}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'private'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'예'</span>
          <span className='outerObject'>{'}'}</span>
          <span className='string'>,</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;&nbsp;<span className='outerObject'>{'{'}</span>
          <span className='key'>value: </span>
          <span className='value'>'public'</span>
          <span className='string'>,</span>
          <span className='key'>label: </span>
          <span className='value'>'아니요, 공용입니다'</span>
          <span className='outerObject'>{'}'}</span>
      
        </li>
        <li>
          &nbsp;&nbsp;<span className='innerObject'>{']'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>bathRoomType</span>
          <span className='string'> === </span>
          <span className='value'>null</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>'필수옵션입니다.'</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
        
      </CodeWrap>
    </div>
  )
}

export default RadioGroupContainer;