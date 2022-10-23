import styled ,{ css }from "styled-components"

export function getColor(color: string ) {
  switch (color) {
    case "blue":
      return 'blue';
    case "black":
      return 'gray';
    default:
      return 'green';
  }
}

interface Props {
  color: string;
  bgColor: string;
  pointPosition: "left" | 'right';
  isActive: boolean;
}

export const Wrap = styled.div<Props>`
  position: relative;
  display: inline-block;
  white-space: nowrap;
    ${({isActive}) => {
      if(isActive) return css`
        &:hover {
          .TooltipWrap {
            display: inline-block;
          }
        }`
    }}
  .TooltipWrap {
    display: none;
    position: absolute;
    top: -64px;
    border: 2px solid black;
    > p {
      color: ${({ color }) => color}; 
      background-color:  ${({ bgColor }) => getColor(bgColor)}; 
      border-radius: 8px;
      padding: 8px;

      font-weight: 400;
    }
    > svg {
      position: absolute;
      top: 20px;
      fill: ${({ bgColor }) => getColor(bgColor)}; 
      ${({pointPosition}) => {
        const distance = 20;
        return css`
        ${pointPosition}: ${distance}px
        `
      }}
  }
  }
`