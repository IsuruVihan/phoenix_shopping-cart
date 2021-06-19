import React, {FC} from 'react';
import {BiDownArrowAlt, BiUpArrowAlt} from 'react-icons/bi';

const AscendingOrder: FC = () => {
  return (
    <span>
      <BiUpArrowAlt className="black-arrow" />
      <BiDownArrowAlt className="last-arrow grey-arrow" />
    </span>
  );
}

export default AscendingOrder;