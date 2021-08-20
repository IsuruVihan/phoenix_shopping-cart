import React, {FC} from 'react';
import {
  FcApproval,
  FcCancel,
  FcHighPriority,
  FcInTransit,
  FcMediumPriority,
  FcProcess,
  FcShipped
} from "react-icons/all";

type OrderStatusIconProps = {
  status: string
}

const OrderStatusIcon: FC<OrderStatusIconProps> = (props): JSX.Element => {
  const {status} = props;

  const getIconBtn = (status: string): JSX.Element => {
    switch (status) {
      case 'Pending':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order pending"><FcMediumPriority/>
        </button>
      case 'Accepted':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order accepted"><FcApproval/></button>
      case 'Rejected':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order rejected"><FcCancel/></button>
      case 'Processing':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order processing"><FcProcess/>
        </button>
      case 'In-Transit':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order in-transit"><FcInTransit/>
        </button>
      case 'Delivered':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order delivered"><FcShipped/></button>
      case 'Error':
        return <button type="button" className="btn" data-toggle="tooltip" title="Order error"><FcHighPriority/>
        </button>
      default:
        return <button type="button" className="btn" data-toggle="tooltip" title={'Order status undefined'}/>
    }
  }

  return (
    <div className="order-status-icon">
      {getIconBtn(status)}
    </div>
  );
};

export default OrderStatusIcon;
