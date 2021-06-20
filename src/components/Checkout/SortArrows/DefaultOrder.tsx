import React, {FC} from 'react';
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi';

const DefaultOrder: FC = () => {
  return (
    <span>
      <BiUpArrowAlt className="grey-arrow" />
      <BiDownArrowAlt className="last-arrow grey-arrow" />
    </span>
  );
}

export default DefaultOrder;