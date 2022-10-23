import React from 'react'
import { CSSProperties } from 'styled-components';
import { ReactComponent as WarningSVG } from '../../../Assets/warning.svg';

import {ErrorWrap} from './styled'
interface IProps {
  errorMessage: string | undefined
  style?: CSSProperties
}
const ErrorMessage: React.FC<IProps> = ({
  errorMessage,
  style
}) => {
  return (
    <ErrorWrap style={style}>
      <div className='svgWrap'><WarningSVG /></div>
      <p>{errorMessage}</p>
    </ErrorWrap>
  )
}
export default ErrorMessage;