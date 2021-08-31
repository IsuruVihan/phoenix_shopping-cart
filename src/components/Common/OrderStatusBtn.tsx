import React, {FC, useState} from 'react';
import {
  FcApproval,
  FcCancel,
  FcHighPriority,
  FcInTransit,
  FcMediumPriority,
  FcProcess,
  FcShipped,
  IoCheckmark,
  IoClose
} from "react-icons/all";
import {Button, Dropdown, OverlayTrigger, Tooltip} from "react-bootstrap";
import {toast} from 'react-hot-toast';
import {confirmAlert} from "react-confirm-alert";

type OrderStatusIconProps = {
  status: string
}

const OrderStatusBtn: FC<OrderStatusIconProps> = (props): JSX.Element => {
  const {status} = props;
  const [btnStatus, setBtnStatus] = useState(status); //TODO: Connect with Redux store and persist in DB

  const pendingOrderOptions = ['Accepted', 'Rejected'];
  const acceptedOrderOptions = ['Processing', 'In-Transit', 'Delivered', 'Error'];

  const RenderWithOverlay = ({children}: any) => {
    return (
      <OverlayTrigger placement="top" overlay={renderTooltip} trigger="hover">
        <span className="order-status-btn">{children}</span>
      </OverlayTrigger>
    )
  }

  const handleDropdownSelect = (status: string | null) => {
    if (status) {

      if (status === 'Accepted' || status === 'Rejected' || status === 'Delivered') {
        confirmAlert({
          customUI: ({onClose}) => {
            return (
              <div className="delete-confirm-alert">
                <h2 className="mt-1 mb-2">Confirm action</h2>
                <hr/>

                <div className="delete-confirm-text my-4 pt-1">
                  <span>Mark order as <b>{status}</b> ?</span>
                </div>

                <Button className="m-2 btn-outline-danger" onClick={() => {
                  setBtnStatus(status);
                  onClose();
                  toast.success((t) => (
                    <span>Order status updated</span>
                  ));
                }}>
                  <IoCheckmark/> Okay
                </Button>

                <Button className="m-2 btn-outline-success" onClick={() => {
                  onClose();
                }}>
                  <IoClose/> Cancel
                </Button>
              </div>
            );
          }
        });

      } else {
        setBtnStatus(status);
        toast.success((t) => (
          <span>Order status updated</span>
        ));
      }

    } else {
      toast.error((t) => (
        <span>That didn't work, please try again</span>
      ));
    }
  }

  const renderDropdownOptions = () => {
    switch (btnStatus) {
      case 'Pending':
        return pendingOrderOptions.map((option: string, index: number) => {
          return <Dropdown.Item key={index} eventKey={option}>{getIconBtn(option)} {option}</Dropdown.Item>
        })
      case 'Accepted':
        return acceptedOrderOptions.map((option: string, index: number) => {
          return <Dropdown.Item key={index} eventKey={option}>{getIconBtn(option)} {option}</Dropdown.Item>
        })
      case 'Processing':
        return acceptedOrderOptions.slice(1).map((option: string, index: number) => {
          return <Dropdown.Item key={index} eventKey={option}>{getIconBtn(option)} {option}</Dropdown.Item>
        })
      case 'In-Transit':
        return acceptedOrderOptions.slice(2).map((option: string, index: number) => {
          return <Dropdown.Item key={index} eventKey={option}>{getIconBtn(option)} {option}</Dropdown.Item>
        })
      case 'Error':
        return acceptedOrderOptions.slice(0, 3).map((option: string, index: number) => {
          return <Dropdown.Item key={index} eventKey={option}>{getIconBtn(option)} {option}</Dropdown.Item>
        })
      default:
        return <span>Status undefined</span>
    }
  }

  const renderTooltip = (props: any) => <Tooltip {...props}>{btnStatus}</Tooltip>;

  const getIconBtn = (status: string): JSX.Element => {
    switch (status) {
      case 'Pending':
        return <Button className="main-icon"><FcMediumPriority/></Button>
      case 'Accepted':
        return <Button className="main-icon"><FcApproval/></Button>
      case 'Rejected':
        return <Button className="main-icon"><FcCancel/></Button>
      case 'Processing':
        return <Button className="main-icon"><FcProcess/></Button>
      case 'In-Transit':
        return <Button className="main-icon"><FcInTransit/></Button>
      case 'Delivered':
        return <Button className="main-icon"><FcShipped/></Button>
      case 'Error':
        return <Button className="main-icon"><FcHighPriority/></Button>
      default:
        return <Button className="main-icon"/>
    }
  }

  if (btnStatus === 'Rejected' || btnStatus === 'Delivered') {
    return <RenderWithOverlay><span className="order-status-btn">{getIconBtn(btnStatus)}</span></RenderWithOverlay>
  }

  return (

    <>
      <Dropdown className="order-status-btn" onSelect={handleDropdownSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic" size="sm">
          <RenderWithOverlay><span className="order-status-btn">{getIconBtn(btnStatus)}</span></RenderWithOverlay>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {renderDropdownOptions()}
        </Dropdown.Menu>
      </Dropdown>
    </>

  );
}

export default OrderStatusBtn;
