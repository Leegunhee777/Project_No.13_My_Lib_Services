import styled, { css } from 'styled-components';
import {theme} from '../../../Style/theme';

export const Container = styled.div<{ 
  isError: boolean | null; direction: string
  }>`
  width: 100%;
  .radio-label {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.color.gray.main};
    margin-bottom: 8px;
    text-align: left;
  }
  .radio-list-wrapper {
    display: flex;
    flex-direction: ${({ direction }) => direction === 'col' ? 'column': 'row'};
    &:after {
      display: block;
      content: '';
      clear: both;
    }
    
    label {
      padding: 3px 3px 3px 0;
      float: left; //radio위치조절
      font-size: 16px;
      line-height: 1.2;
      cursor: pointer;
      clear: both;

      ${({ direction }) => direction ==='col' 
      ? css`
          margin-bottom: 12px;
          &:last-of-type{
            margin-bottom: 0;
          }
        ` : 
        css`
          margin-right: 12px;
          &:last-of-type{
            margin-right: 0;
          }
        `
      };

      &:last-child {
        margin-bottom: 0;
      }

      input[type='radio'] {
        width: 16px;
        height: 16px;
        margin: auto 0;
        position: relative;
        top: 2px;
        margin-right: 8px;
        flex-shrink: 0;
        font-size: 16px;
        -webkit-appearance: none;
        border: 1px solid ${theme.color.gray.main};
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        ${({ isError }) => {
            if (isError) {
              return css`
                border-color: ${theme.color.red.alert};
              `;
            }
        }}
      }
      input[type='radio']:checked {
        background-color: ${theme.color.green.main};
        border: 0;
      }
      input[type='radio']:checked:after {
        content: '';
        width: 6px;
        height: 6px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        border-radius: 50%;
        display: block;
      }

      .radio-description {
        display: block;
        margin-top: 8px;
        font-size: 14px;
      }
    }
  }
`