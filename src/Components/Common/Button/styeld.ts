import styled, { css } from "styled-components";
import { theme } from '../../../Style/theme'

//버튼 크기 구하기
const getButtonSize = (size: 'small' | 'medium') => {
  switch (size) {
    case 'medium':
      return css`
        height: 48px;
      `;
    case 'small':
      return css`
        font-size: 14px;
        height: 36px;
      `;
    default:
      return '';
  }
};
//버튼 색상 구히기 후에 색상이 추가된다면 다른 색을 추가해서 컨트롤해도됨
const getButtonColor = (color: string, colorReverse: boolean) => {

  if(!colorReverse){
    switch (color) {
      case 'green':
        return css`
          background-color: ${theme.color.green.main};
          color: white;
          &:hover{
            background-color: ${theme.color.green.dark};
          }
        
        `;
      case 'red':
        return css`
          background-color: ${theme.color.red.main};
          color: white;
          &:hover{
            background-color:   ${theme.color.red.dark}
          }
        `;
  
      default:
        return css`
          background-color: ${theme.color.gray.main};
          color: white;
          &:hover{
            background-color: ${theme.color.gray.dark}
          }
        `;
    }
  }
 
    switch (color) {
      case 'green':
        return css`
          border: 2px solid ${theme.color.green.main};
          color: ${theme.color.green.main};
          background-color: white;
          &:hover{
          background-color:  ${theme.color.green.light} 
        }
        `;
      case 'red':
        return css`
          border: 2px solid ${theme.color.red.main};
          color: ${theme.color.red.main};
          background-color: white;
          &:hover{
            background-color:  ${theme.color.red.light} 
          }
        `;
      default:
        return css`
        background-color: white;
        color: ${theme.color.black};
        border: 1px solid ${theme.color.gray.main};
        &:hover{
          background-color:  ${theme.color.gray.light} 
        }
      `;
    }
  
};
interface StyledButtonProps {
  width: string | undefined;
  colorReverse: boolean;
  size: 'small' | 'medium';
  iconPosition: 'left'| 'right'
}
export const Container = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  width: ${props => props.width};
  ${props => getButtonColor(props.color || '', props.colorReverse)};
  ${props => getButtonSize(props.size)}

  svg {
   ${props => props.iconPosition ==='left' ?  
   css`
      margin-right: 12px;
    ` : 
    css`
      margin-left: 12px;
    `}
  }
`;