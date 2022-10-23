import React from 'react';

import { Wrap } from './styled';

interface Props {
  color: string,
  bgColor: 'blue' | 'black',
  pointPosition: 'left' | 'right' 
  content: string,
  isActive: boolean
  children: JSX.Element
}

function TooltipComponent({ content, color, bgColor, pointPosition='right', isActive=true, children }: Props) {

  return (
    <Wrap    
      color={color} 
      bgColor={bgColor} 
      pointPosition={pointPosition}
      isActive={isActive}>
      <div className="TooltipWrap">
        <p>{content}</p>

        <svg width="10" height="7" viewBox="0 0 10 7" fill={'none'} xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0H0L5 7L10 0Z" />
        </svg>
      </div>
      {children}
    </Wrap>
  );
}

export default TooltipComponent;