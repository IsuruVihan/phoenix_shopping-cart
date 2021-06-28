import React, {FC} from 'react';
import {Col, Image} from "react-bootstrap";
import DiscountBannerImg from '../../../assets/images/discount1.png';

const DiscountBanner: FC = () => {
  return (
    <Col className="discount-banner px-0" lg={5} sm={12} xs={12}>
      <Image src={DiscountBannerImg} className="discount-banner-img" alt="discount"/>
    </Col>
  );
}

export default DiscountBanner;