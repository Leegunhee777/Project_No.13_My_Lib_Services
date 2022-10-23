import styled, { css } from 'styled-components';
import { theme } from '../../../Style/theme';

type InputContainerProps = {
  iconExist: boolean;
  isError: boolean;
  iconPosition: string;
};

export const Container = styled.div<InputContainerProps>`
  
  .label {
      display: block;
      font-size: 16px;
      color: ${theme.color.gray.main};
      font-weight: 600;
      margin-bottom: 8px;
      word-break: break-all;
  }

  .inputWrap {
    position: relative;
    width: 100%;
    input {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: 46px;
      border: 1px solid ${theme.color.gray.main};
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      padding: ${({ iconExist,iconPosition }) => ( 
      iconExist ?
      iconPosition === 'right' 
        ? '0 40px 0 12px' 
        : '0 12px 0 40px' 
      : '0 12px'
      )}; 
   
      &::placeholder {
        color: ${theme.color.gray.dark};
      }
      &:focus {
        border-color: ${theme.color.green.main} 
      } 

      ${({isError }) =>
        isError &&
        css`
            border-color: ${theme.color.red.alert} !important;
            background-color: ${theme.color.red.light};     
        `}
    }
    .iconWrap {
      position: absolute;
      display: flex;
      align-items: center;
      height: 46px;
      top: 0;
      ${props => props.iconPosition ==='left' ? (
        css`
          left: 12px;
        `) : ( 
        css`
          right: 12px;
        `)
      }
    }
  }    
`;
