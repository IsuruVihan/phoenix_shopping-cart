import React, {FC} from 'react';
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi';

const DescendingOrder: FC = () => {
  return (
    <span>
      <BiUpArrowAlt className="grey-arrow"/>
      <BiDownArrowAlt className="last-arrow black-arrow"/>
    </span>
  );
}

export default DescendingOrder;