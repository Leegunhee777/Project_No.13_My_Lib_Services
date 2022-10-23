import styled from 'styled-components'
import { theme } from '../../../Style/theme';

export const Container = styled.div<{
  isError:boolean
}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .counter-label {
    font-size: 16px;
    color: ${theme.color.gray.main};
    font-weight: 600;
  }
  .counter-description {
    display: block;
    font-size: 14px;
  }
  .counter-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    button {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 1px solid ${({isError}) => isError ? theme.color.red.alert : theme.color.green.main};
      svg {
        path {
          fill: ${({isError}) => isError ? theme.color.red.alert : theme.color.green.main};
        }
      }

      background-color: white;
      outline: none;
      cursor: pointer;
      font-size: 21px;
      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
`