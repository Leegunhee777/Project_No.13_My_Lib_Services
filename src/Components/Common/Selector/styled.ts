import styled from "styled-components";
import { theme } from '../../../Style/theme'
import DownArrow from '../../../Assets/selector_down_arrow.svg'

interface SelectorContainerProps {
  isError: boolean;
}

export const Container = styled.div<SelectorContainerProps>`
  width: 100%;
  .wrap {
    position: relative;
    .label {
      display: block;
      font-size: 16px;
      color: ${theme.color.gray.main};
      font-weight: 600;
      margin-bottom: 8px;
      word-break: break-all;
    }

    select {
      width: 100%;
      border-radius: 4px;
      border:  1px solid ${({ isError }) => isError ? theme.color.red.alert: theme.color.gray.main};
      height: 46px;
      padding: 0px 36px 0px 14px;
      appearance: none;
      outline: none;
      -webkit-appearance: none;
      color:  ${theme.color.gray.dark};
      background-image: url(${DownArrow});
      background-position: right 14px center;
      background-repeat: no-repeat;

      &:disabled {
        cursor: not-allowed;
      }

      &:focus{
        border: 1px solid ${theme.color.green.main};
      }
    }
      /*
      이런식으로 처리하면 svg영역을 클릭했을때 selector가 열리지 않게된다
      backgroundImage를 사용하면 그 문제가 해결됨 
        svg {
         path{
          fill:  ${theme.color.gray.main};
         }
         position: absolute;
         right: 14px;
      } */ 
  }
`;
