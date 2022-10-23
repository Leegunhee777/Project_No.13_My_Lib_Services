import React from 'react';
import styled from 'styled-components';
import { Wrap } from './styled';
import Card from '../../Components/Common/Card';
const ButtonContainer = styled.button`
    padding: 24px 32px;
    border-radius: 2px;
    border: none;
    color: white;
    margin: 10px;
`
const Solid = styled.button`
    padding: 24px 32px;
    border-radius: 2px;
    margin: 10px;
    background-color: white;
`
const Qwe = styled.button`
  background-color:  ${(props) => props.theme.color.red.dark};
`


const HomePage = ()=>{
    return (
        <Wrap>
            <div>
            <div style={{fontSize:'35px', fontWeight:'bold'}}>Make Design system !</div>     
               <div>가나다</div>
               <Card>rlem</Card>
          
               <ButtonContainer style={{backgroundColor:'#007378'}}>
                  버튼
               </ButtonContainer>
               <ButtonContainer style={{backgroundColor:'#D80039'}}>
                  버튼
               </ButtonContainer>  
               <Solid style={{border: '2px solid rgb(211 211 211)'}}>
                  버튼
               </Solid>



               <ButtonContainer style={{backgroundColor:'#008D68'}}>
                  버튼
               </ButtonContainer >    
                  <ButtonContainer style={{backgroundColor:'#005CBC'}}>
                  버튼
               </ButtonContainer>    
            
                  
               <ButtonContainer style={{backgroundColor:'#cc0000'}}>
                  버튼
               </ButtonContainer>
            
               <Solid style={{border: '2px solid #b0b0b0'}}>
                  버튼
               </Solid>
               <Solid>
                  버튼
               </Solid>
               <Qwe>
                  skensj
               </Qwe>
         </div>
        </Wrap>)
}

export default HomePage;