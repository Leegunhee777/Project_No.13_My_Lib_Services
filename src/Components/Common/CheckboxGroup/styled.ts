
import styled, {css} from 'styled-components';
import {theme} from '../../../Style/theme'
import CheckboxSvg from '../../../Assets/checkbox_mark.svg'

export const Container = styled.div<{
  direction: string; 
  isError: boolean
  }>`
  display: flex;
  flex-direction: ${({ direction }) => direction ==='col' ? 'column': 'row'};

  &:after {
    display: block;
    content: '';
    clear: both;
  }
  .checkbox-label {
    position: relative;
    height: 18px;

    ${({ direction }) => direction ==='col' 
    ? css`
        margin-bottom: 24px;
        &:last-of-type{
          margin-bottom: 0;
        }
      ` : 
      css`
        margin-right: 24px;
        &:last-of-type{
          margin-right: 0;
        }
      `
    };
    display: flex;
    align-items: center;
    cursor: pointer;
    float: left;
    clear: both;
  }
  // ie input x 버튼 삭제
  input::-ms-clear {
    display: none;
  }
  input[type='checkbox'] {
    margin: 0;
    border: 0;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  } 
   input[type='checkbox']:checked {
    margin: 0;
    border: 0;
    -webkit-appearance: none;
  }
 
  //가상클래스 요는는 공간을 차지하지 않으므로, 가상요소를 넣을 공간확보를해주기 위헤 span에 공간을 할당해준다
  input[type='checkbox'] + span {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    display: inline-block;
    flex-shrink: 0;
  }

  //위에서 확보된 span 공간에 가상요소를 넣어준다  
  input[type='checkbox'] + span::before {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    display: inline-table;
    border: 1px solid ${({isError})=> isError ?  theme.color.red.alert: theme.color.gray.dark};
    border-radius: 2px;
    box-sizing: border-box;
    background-color: white;
    cursor: pointer;
  }

  input[type='checkbox']:checked + span::before {
    content: '';
    width: 18px;
    height: 18px;
    display: inline-table;
    background-color: ${theme.color.green.main};
    border: 0;
    border-radius: 2px;
    position: absolute;
    background-image: url(${CheckboxSvg});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${theme.color.gray.main};
  margin-bottom: 12px;
  text-align: left;
`;