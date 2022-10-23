import styled from "styled-components";
import { theme } from "../../../Style/theme";


interface IProps {
  isError: boolean;
}

export const Container = styled.div<IProps>`
  width: 100%;
  .label {
      display: block;
      font-size: 16px;
      color: ${theme.color.gray.main};
      font-weight: 600;
      margin-bottom: 8px;
      word-break: break-all;
  }
  
  textarea{
    resize: none;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 4px;
    border-color: ${({isError})=> isError && theme.color.red.alert};
    font-size: 16px;
    &:focus{
        outline-color: ${theme.color.green.main};
    }
  }
  
`