import React, {FC} from 'react';

type OrderItemsImageSetProps = {
  imagePaths: string[]
};

const OrderItemsImageSet: FC<OrderItemsImageSetProps> = (props) => {

  const renderImages = () => {
    return props.imagePaths.map((i: string, index: number) =>
      <div key={index} style={{backgroundImage: `url(${i})`}}/>
    );
  };

  return (
    <>
      <div className="items-image-set">
        {renderImages()}
      </div>
    </>
  );
};

export default OrderItemsImageSet;
