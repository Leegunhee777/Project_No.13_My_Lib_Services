import styled, { css } from "styled-components";
import { theme } from "../../../Style/theme";
import DatePicker from '../../../Assets/datepicker.svg';
type InputContainerProps = {
  isError: boolean;
  iconPosition: string;
};

export const Container = styled.div<InputContainerProps>`
  border: 2px solid pink;
  width: 160px;
  .label{
    display: block;
    font-size: 16px;
    color: ${theme.color.gray.main};
    font-weight: 600;
    margin-bottom: 8px;
    word-break: break-all;
  }


    button {
      outline: none;
      border: 1px solid ${({isError})=> isError ? theme.color.red.alert : theme.color.gray.main};
      border-radius: 4px;
      width: 100%;
      height: 46px;
      cursor: pointer;
      background-image: url(${DatePicker});
      background-repeat: no-repeat;
      background-size: 30px;
  
      font-size: 16px;
      color: ${theme.color.gray.dark};

      ${props => props.iconPosition ==='left' ? (
        css`
          background-position: left 10px center;
          padding: 0 14px 0 50px;
        `) : ( 
        css`
          background-position: right 10px center;
          padding: 0 50px 0 14px;
        `)
      }

      &:hover{
        background-color: #e7e7e7;
      }
    }
    /* .iconWrap {
      position: absolute;
      display: flex;
      align-items: center;
      height: 46px;
      top: 0;

      svg{
        width: 30px;
        height: 30px;
        g {
          fill: ${theme.color.gray.main};
        }
      }
      ${props => props.iconPosition ==='left' ? (
        css`
          left: 12px;
        `) : ( 
        css`
          right: 12px;
        `)
      }
    } */ 
`