import styled, { css } from "styled-components";
import { theme } from '../../../Style/theme';

export const Container = styled.div<{
  leftPercent:number;
  rightPercent:number;
}>`
  .labelWrap {
    display: flex;
    justify-content: space-between;
    .label {
      display: block;
      font-size: 16px;
      color: ${theme.color.gray.main};
      font-weight: 600;
      margin-bottom: 20px;
      word-break: break-all;
    }
  }
  

.wrap {
  position: relative;
  //1. 두개의 range를 한줄로 겹쳐 놓는다
  input[type="range"] {
    position: absolute;
    /* opacity로 가린 것을 이벤트도 비활성화하기 위해 */
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0;
  }
  //2. 한줄로 겹쳐진 range의 기존 thumb를 죽이고
  //커스터 thumb를 만들고, thumb이벤트를 활성화 시킨다.
  input[type="range"]::-webkit-slider-thumb {
    /* 겹쳐진 두 thumb를 모두 활성화 */
    pointer-events: all;
    width: 26px;
    height: 26px;
    border-radius: 0;
    border: 0 none;
    cursor: pointer;
    /* appearance를 해야 위의 스타일들을 볼 수 있음 */
    //기존 thumb를 없애기위해 사용
    -webkit-appearance: none;
  }

  .fakeSlider{
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 13px;
    .base {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background-color: hsl(169deg 98% 20% / 26%);
    }
    .range{
      position: absolute;
      z-index: 2;
      left: ${({leftPercent})=> leftPercent}%;
      right:${({rightPercent})=> 100 - rightPercent}%;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background-color: ${theme.color.green.dark};
    }
    .thumb {
      position: absolute;
      z-index: 3;
      width: 26px;
      height: 26px;
      background-color: ${theme.color.green.dark};
      border-radius: 50%;
    }
    .thumb.left{
      left: ${({leftPercent})=>leftPercent}%;
      transform: translate(-13px, -8px);
    }
    .thumb.right{
      right:${({rightPercent})=> 100-rightPercent}%;
      transform: translate(13px, -8px);
    }
  }

  .rangeWrap {
    display: flex;
    justify-content: space-between;
    margin: 0 13px;
    margin-top: 12px;
    .label {
      display: block;
      font-size: 14px;
      color: ${theme.color.gray.main};
      font-weight: 600;
      word-break: break-all;
    }
  }
}


`