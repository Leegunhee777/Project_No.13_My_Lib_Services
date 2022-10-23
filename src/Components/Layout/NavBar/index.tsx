import React from 'react';
import { useState, useDispatch } from '../../../Context/GlobalContextProvider';
import { Container, LinkWrap  } from './styled';
import { Link } from 'react-router-dom';

import { ReactComponent as CloseSVG } from '../../../Assets/modal_close_x_icon.svg';
const list = [
  {label: 'Button', path:'button'},
  {label: 'CheckBox', path:'checkbox'},
  {label: 'Counter', path:'counter'},
  {label: 'Calendar', path:'calendar'},
  {label: 'TextArea', path:'textarea'},
  {label: 'Input', path:'input'},
  {label: 'Radio', path:'radiogroup'},
  {label: 'Selector', path:'selector'}, 
  {label: 'Slider', path:'slider'},
]


const NavBar = () => {
  const {navBarState} = useState();

  const { navBarDispatch } = useDispatch();

  const closeNavBar = (e: any) =>{
    navBarDispatch({type:'CHANGE_OPEN_STATUS', payload: false})
  }

    return (
      <Container className='container' isOpen= {navBarState.isOpen} validPath={navBarState.validPath}>
      <div
        className='modal-background'
        role='presentation'
        onClick={closeNavBar.bind(null)}
      />
      <div className='content'>
        <div className='button' onClick={closeNavBar.bind(null)}>
          <CloseSVG />
        </div>
        <LinkWrap>
        {list.map((value, index) => (
          <Link to ={`/docs/${value.path}`}key ={index}>{value.label}</Link>
        ))}
        </LinkWrap>
     
      </div>
  
      </Container> 
    );
}

export default NavBar
