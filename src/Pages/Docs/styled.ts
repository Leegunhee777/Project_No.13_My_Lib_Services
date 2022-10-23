import styled from "styled-components";
import { contentWrapper } from "../../Style/theme";

export const Wrap = styled.div`
 ${contentWrapper}
`

export const ExampleWrap = styled.div`
  border: 1px solid #dadada;
  padding: 60px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`

export const CodeWrap = styled.ul`
  list-style: decimal;
  border-radius: 4px;
  padding: 40px;
  font-size: 14px;
  background-color: black;

  li::marker{
    color: gray
  }

  //파랑
  .tag {
    color: #0a94ff;
  }
  .outerObject{
    color: #0a94ff;
  }

  .innerObject{
    color: yellow;
  }

  .key{
    color: #34f1ff
  }
  .value {
    color: orange;
  }
  .string {
    color: white;
  }
`