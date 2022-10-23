import styled from "styled-components";
import {theme} from '../../../Style/theme'
export const TopBarWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 2;
  min-width: 1260px;
  width: 100%;

  > div {
    margin: 0 auto;
    padding: 0 60px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1260px;
    box-sizing: border-box;
  }
`;

//box sizing border-box로 하고 width 1260하고 padding 좌우60px
export const ButtonWrap = styled.div`
    cursor: pointer;
    display: block;
    margin-right: 20px;
    svg {
      path {
        fill: ${theme.color.gray.main} ;
      }
    }
    @media(min-width:1651px){
      display: none;
    }
`

export const LinkWrap = styled.div`
  a {
    text-decoration: none;
    margin-right: 6px;
    color: #979799;
  }
  a:hover{
    color: ${theme.color.green.dark};
  }

  a + a::before{
    content: '|';
    margin-right: 6px;
  }
`