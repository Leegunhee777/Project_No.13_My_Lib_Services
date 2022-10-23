import styled from "styled-components"
import {theme} from '../../../Style/theme'

export const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  .svgWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    svg {
      path {
        fill: ${theme.color.red.alert};;
      }
    }
  }
  p {
    font-size: 12px;
    color: ${theme.color.red.alert};
    word-break: break-all;
  }
`