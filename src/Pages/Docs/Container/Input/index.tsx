import React from 'react';
import Input from '../../../../Components/Common/Input';
import { ReactComponent as PersonSvg } from '../../../../Assets/person.svg'
import { ReactComponent as Mail } from '../../../../Assets/mail.svg'
import { ReactComponent as ClosedEyeIcon } from '../../../../Assets/closed_eye.svg'
import { ReactComponent as OpenedEyeIcon } from '../../../../Assets/opened_eye.svg'

import { ExampleWrap, CodeWrap } from '../../styled';
const InputContainer = () => {

  const [state, setState] = React.useState({
    name:'',
    mail:'',
    password:'',
  })

  const [isPasswordHided, setIsPasswordHided] = React.useState(true);

  const togglePasswordHiding = () => {
    setIsPasswordHided(!isPasswordHided);
  };


  function onChangeLastname(e:React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target
  
    setState(prev=>({...prev, [name]: value}))
  }
  return (
    <div>
      <h1 style={{textDecoration:'underline'}}>Input Example</h1>
      <h2 style={{marginTop:'60px'}}>#Basic</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
          <Input
            name='name'
            label='이름'
            placeholder="(예:홍길동)"
            value={state.name}
            onChange={onChangeLastname}
            style={{width:'240px'}}
          />

        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}Input</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>name</span>
          <span className='string'>=</span>
          <span className='value'>'name'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'이름'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>placeholder</span>
          <span className='string'>=</span>
          <span className='value'>'{'('}예:홍길동{')'}'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='tag'>{'{'}</span>
          <span className='value'>state.name</span>
          <span className='tag'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='tag'>{'{'}</span>
          <span className='value'>onChangeLastname</span>
          <span className='tag'>{'}'}</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>





      <h2 style={{marginTop:'60px'}}>#With Icon</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Input
          name='mail'
          label='이메일'
          placeholder="이메일주소"
          type='email'
          value={state.mail}
          onChange={onChangeLastname}
          icon={<Mail/>}
          iconPosition='left'
          style={{width:'240px'}}
        />
        <Input
          name='name'
          label='이름'
          placeholder="이름(예:길동)"
          value={state.name}
          onChange={onChangeLastname}
          icon={<PersonSvg/>}
          iconPosition={'left'}
          style={{width:'240px', marginTop:'1rem'}}
        />

        <Input
            name='password'
            label='비밀번호'
            placeholder="비밀번호 설정하기"
            type={isPasswordHided ? 'password' : 'text'}
            value={state.password}
            onChange={onChangeLastname}
            icon={
              isPasswordHided ? (
                <ClosedEyeIcon onClick={togglePasswordHiding} style={{cursor:'pointer'}}/>
              ) : (
                <OpenedEyeIcon onClick={togglePasswordHiding} style={{cursor:'pointer'}}/>
              )
            }
            style={{width:'240px', marginTop:'1rem'}}
          />

        </div>
      </ExampleWrap>
      <CodeWrap>
      <li>
        <span className='tag'>{'<'}Input</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>name</span>
        <span className='string'>=</span>
        <span className='value'>'mail'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>label</span>
        <span className='string'>=</span>
        <span className='value'>'이메일'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>placeholder</span>
        <span className='string'>=</span>
        <span className='value'>'이메일주소'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>type</span>
        <span className='string'>=</span>
        <span className='value'>'email'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>value</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='value'>state.mail</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>onChange</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='value'>onChangeLastname</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>icon</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='tag'>{'<'}Mail{'/>'}</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>iconPosition</span>
        <span className='string'>=</span>
        <span className='value'>'left'</span>
      </li>
      <li>
        <span className='tag'>{'/>'}</span>
      </li>
      <li />


      <li>
        <span className='tag'>{'<'}Input</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>name</span>
        <span className='string'>=</span>
        <span className='value'>'name'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>label</span>
        <span className='string'>=</span>
        <span className='value'>'이름'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>placeholder</span>
        <span className='string'>=</span>
        <span className='value'>'이름(예:길동)'</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>value</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='value'>state.name</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>onChange</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='value'>onChangeLastname</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>icon</span>
        <span className='string'>=</span>
        <span className='outerObject'>{'{'}</span>
        <span className='tag'>{'<'}PersonSvg{'/>'}</span>
        <span className='outerObject'>{'}'}</span>
      </li>
      <li>
        &nbsp;&nbsp;<span className='key'>iconPosition</span>
        <span className='string'>=</span>
        <span className='value'>'left'</span>
      </li>
      <li>
        <span className='tag'>{'/>'}</span>
      </li>
      
      
      <li />


      <li>
          <span className='tag'>{'<'}Input</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>name</span>
          <span className='string'>=</span>
          <span className='value'>'password'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>비밀번호'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>placeholder</span>
          <span className='string'>=</span>
          <span className='value'>'비밀번호 설정하기'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>type</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>isPasswordHided </span>
          <span className='string'>? </span>
          <span className='value'>'password' </span>
          <span className='string'>: </span>
          <span className='value'>'text' </span>
          <span className='outerObject'>{'}'}</span>
        </li>
    
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='tag'>{'{'}</span>
          <span className='value'>state.password</span>
          <span className='tag'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='tag'>{'{'}</span>
          <span className='value'>onChangeLastname</span>
          <span className='tag'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>icon</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>isPasswordHided</span>
          <span className='string'>?</span>
          <span className='innerObject'>{'('}</span>
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;&nbsp;<span className='tag'>{'<'}ClosedEyeIcon</span>
          <span className='key'>onClick</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>togglePasswordHiding</span>
          <span className='outerObject'>{'}'}</span>
          <span className='tag'>{'/>'}</span>
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;&nbsp;<span className='innerObject'>{')'} </span>
          <span className='string'>: </span>
          <span className='innerObject'>{'('}</span>
        </li>
        <li>
          &nbsp;&nbsp; &nbsp;&nbsp;<span className='tag'>{'<'}OpenedEyeIcon</span>
          <span className='key'>onClick</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>togglePasswordHiding</span>
          <span className='outerObject'>{'}'}</span>
          <span className='tag'>{'/>'}</span>
        </li>
        <li>
          &nbsp;&nbsp;&nbsp;<span className='innerObject'>{')'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='outerObject'>{'}'}</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>

      </CodeWrap>









      <h2 style={{marginTop:'60px'}}>#Error</h2>
      <ExampleWrap>
        <div style={{display:'flex', width:'100%', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Input
          name='name'
          label='이름'
          placeholder="이름(예:길동)"
          value={state.name}
          onChange={onChangeLastname}
          icon={<PersonSvg/>}
          iconPosition='right'
          isError={state.name === ''}
          errorMessage="이름을 입력하시오"
          style={{ marginTop:'1rem'}}
        />
        </div>
      </ExampleWrap>
      <CodeWrap>
        <li>
          <span className='tag'>{'<'}Input</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>name</span>
          <span className='string'>=</span>
          <span className='value'>'name'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>label</span>
          <span className='string'>=</span>
          <span className='value'>'이름'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>placeholder</span>
          <span className='string'>=</span>
          <span className='value'>'이름(예:길동)'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>value</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state.name</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>onChange</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>onChangeLastname</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>icon</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='tag'>{'<'}PersonSvg{'/>'}</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>iconPosition</span>
          <span className='string'>=</span>
          <span className='value'>'right'</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>isError</span>
          <span className='string'>=</span>
          <span className='outerObject'>{'{'}</span>
          <span className='value'>state.name</span>
          <span className='string'>===</span>
          <span className='value'>''</span>
          <span className='outerObject'>{'}'}</span>
        </li>
        <li>
          &nbsp;&nbsp;<span className='key'>errorMessage</span>
          <span className='string'>=</span>
          <span className='value'>'이름을 입력하시오'</span>
        </li>
        <li>
          <span className='tag'>{'/>'}</span>
        </li>
      </CodeWrap>
  
    </div>
  )
}

export default InputContainer;