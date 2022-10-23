import { PATH } from '../../../Routes/paths';
import { Link, useNavigate } from 'react-router-dom';
import { TopBarWrapper, ButtonWrap, LinkWrap } from './styled';
import { useState, useDispatch } from '../../../Context/GlobalContextProvider';

import { ReactComponent as NavSVG } from '../../../Assets/hambuger.svg';
function TopBar() {
  const { navBarState } = useState();
  // const navigate = useNavigate();
  const { navBarDispatch } = useDispatch();

  const openNavBar = () =>{
    navBarDispatch({type:'CHANGE_OPEN_STATUS', payload: true})
  }

  console.log(navBarState)
  return (

    <TopBarWrapper>
      <div>
        <div style={{display:'flex', alignItems: 'center'}}>
        {navBarState.validPath && (
          <ButtonWrap  onClick={openNavBar}>
            <NavSVG/>
          </ButtonWrap>
        )}
        <span>
          로고
        </span>
        
        </div>

        <div>
          <LinkWrap>
            <Link to={PATH.home}>Home</Link> 
            <Link to={PATH.intro.root}>Intro</Link>
            <Link to={PATH.docs.default}>Document</Link>
            <Link to={PATH.contact.root}>Contact</Link>
          </LinkWrap>
        
          {/* <button
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로가기
          </button> */}
        </div>
      </div>
    </TopBarWrapper>
  );
}

export default TopBar;
