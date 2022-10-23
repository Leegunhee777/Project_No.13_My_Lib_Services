import React, { Children, ReactNode } from 'react';

import { Wrap } from './styled'
interface props {
  children: ReactNode
}
const Card = ({children}: props) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
}

export default Card;