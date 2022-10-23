import styled, { css } from "styled-components";

type Props = {
  isOpen: boolean;
  validPath: boolean;
}

export const Container = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display:${({ validPath }) => (validPath ?'block' :'none')}; 
  height: 100%;
  width: 200px;

  .modal-background {
    display: none;
  }
  
  .content {
    border: 1px solid ${({ theme }) => (theme.color.gray.main)};
    border-top: none;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 12px;
    padding-top: 80px;
    background-color: white;

    .button {
      display: none;
    }
  }
   //작을때
  @media(max-width:1650px) {
      display: none ; 
      ${props => props.isOpen &&
        css`
        display: block;
        width: 100%;
        height: 100%;
          .content{
            width: 200px;
          }
          .button {
            position: absolute;
            top: 0;
            left:167px;
            display: inline-flex  !important;
            align-items: center;
            justify-content: center;
            padding: 6px 4px 4px 2px;
            border: 1px solid #949292;
            background-color: #ebebeb;
            border-radius: 4px 0px 4px 4px;
            cursor: pointer;
            :hover{
              background-color: #d4d4d4;
            }
          }
          .modal-background {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgb(78 78 78 / 75%)
          }
        `
        }
  }
`

export const LinkWrap = styled.div`
   a:first-child{
    border-top: 2px solid #e6e6e6;
  }
  a {
    display: block;
    text-decoration: none;
    color: #5a5a5a;
    border-bottom: 1px solid #e6e6e6;
    padding: 14px;
    &:hover{
      background-color: #efefef;
      
    }

  }

`