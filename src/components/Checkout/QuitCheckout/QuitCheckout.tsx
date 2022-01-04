import React, {FC, useEffect} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import DiscountBanner from "./DiscountBanner";
import AccountSignIn from "./AccountSignIn";
import ShippingForm from "./ShippingForm";
import ChangeAddress from "./ChangeAddress/ChangeAddress";
import DeliveryInstructions from "./DeliveryInstructions";
import CheckoutPay from "./CheckoutPay";
import {CREATE_ORDER} from "../../../data/mutations";
import {useMutation} from "@apollo/client";
import {confirmAlert} from "react-confirm-alert";
import {IoArrowBack} from "react-icons/all";
import 'react-confirm-alert/src/react-confirm-alert.css'; // confirm alert styles
import {useHistory} from 'react-router-dom';

const QuitCheckout: FC = () => {
  const history = useHistory();
  const [createOrder, {data, loading, error}] = useMutation(CREATE_ORDER);
  // TODO: Create another reducer to handle checkout data
  // const checkoutData = useSelector((state: State) => state.CheckOutData);

  useEffect(() => {
    if (loading) console.log('Loading...');
    if (error) console.log(error);
    if (!data) console.log('No data!')
    console.log(data);
  }, [data]);

  const handleOrderButtonClick = () => {
    // TODO: Implement UI for loading screen while placing order
    try {
      createOrder({
        variables: {
          // TODO: Store checkout data in redux store and fetch
          input: {
            "customer": "6199691a2730c01d045b89af",
            "items": [{
              "product": "6191f4feed59707536a056cc",
              "unitPrice": 45000,
              "purchasedQty": 1
            }
            ],
            "billingAddress": {
              "address": "10, Upper Dickson Road, Galle",
              "city": "Galle",
              "contactNumber": "0912345367",
              "country": "Sri Lanka",
              "fullName": "John Doe",
              "postalCode": "80000"
            },
            "shippingAddress": {
              "address": "10, Upper Dickson Road, Galle",
              "city": "Galle",
              "contactNumber": "0912345367",
              "country": "Sri Lanka",
              "fullName": "John Doe",
              "postalCode": "80000"
            },
            "deliveryInstructions": "Test order from web app",
            "couponCode": "",
            "orderAmount": {
              "deliveryCharge": 0.0,
              "grossTotal": 45000.0,
              "discount": 0.0,
              "netTotal": 45000.0
            },
            "placedAt": new Date().toString(),
            "payment": {
              "amount": 45000.0,
              "paymentMethod": "CARD",
              "paymentStatus": "PAID",
              "paidAt": new Date().toString()
            },
            "orderStatus": "PENDING"
          }
        },
        // TODO: Create query to fetch user's updated list of orders
        // refetchQueries: [{
        //   query: GET_USER_ORDERS
        // }]
      }).then(r => confirmAlert({
        customUI: ({onClose}) => {
          return (
            <div className="order-confirm-alert">
              <h1 className="mb-lg-1">Order placed</h1>
              <div className="order-confirm-icon my-4 py-3">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                  <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="7" strokeMiterlimit="10"
                          cx="65.1" cy="65.1" r="62.1"/>
                  <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="8" strokeLinecap="round"
                            strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                </svg>
              </div>

              <div className="order-confirm-text">
                <p>We have received your order</p>
                <p>Thank you for shopping with us</p>
              </div>

              <Button className="go-back-btn btn mt-4 mb-1" onClick={() => {
                onClose();
                history.push("/");
              }}>
                <IoArrowBack/> Continue Shopping
              </Button>
            </div>
          );
        }
      }));
    } catch (e: any) {
      alert("Sorry, an error occurred. Please try again later.");
      console.log(e);
    }
  }

  return (
    <Row className="quit-checkout mx-sm-2 mt-4">
      <DiscountBanner/>
      <Col className="ps-lg-4 ps-sm-0 pe-0 pt-lg-0 pt-sm-2" lg={7} sm={12} xs={12}>
        <AccountSignIn/>
        <ShippingForm/>
        <ChangeAddress/>
        <DeliveryInstructions/>
        <CheckoutPay onOrderButtonClick={handleOrderButtonClick}/>
      </Col>
    </Row>
  );
}

export default QuitCheckout;
