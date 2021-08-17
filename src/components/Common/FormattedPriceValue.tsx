import React from 'react';

const FormattedPriceValue = (value: String) => {
  // const splitPrice = value.split('.');
  return (
    <>
      {/*splitPrice[0]}. {splitPrice[1]}.<span style={{fontSize: "0.8em"}}>{splitPrice[2]}</span>*/}
      {value}.<span style={{fontSize: "0.8em"}}>00</span>
    </>
  );
};

export default FormattedPriceValue;
