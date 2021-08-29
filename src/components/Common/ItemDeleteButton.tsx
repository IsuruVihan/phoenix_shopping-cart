import React, {FC} from 'react';
import {FiTrash, IoCheckmark, IoClose} from "react-icons/all";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {CartActionCreator} from "../../state";
import {toast} from "react-hot-toast";
import {RemoveItem} from '../../state/action-creators/CartActionCreator';
import {confirmAlert} from "react-confirm-alert";
import {Button} from "react-bootstrap";

type ItemDeleteButtonProps = {
  orderItemIndex: number,
  orderItemName: string
}

const ItemDeleteButton: FC<ItemDeleteButtonProps> = (props) => {
  const {orderItemIndex, orderItemName} = props;
  const dispatch = useDispatch();
  const {RemoveItem} = bindActionCreators(CartActionCreator, dispatch);

  const handleOnItemRemoveClick = (orderItemIndex: number) => {
    confirmAlert({
      customUI: ({onClose}) => {
        return (
          <div className="remove-confirm-alert">
            <h2 className="mt-1 mb-2">Confirm action</h2>
            <hr/>

            <div className="remove-confirm-text my-4 pt-1">
              <span>Remove <b>{orderItemName}</b> from the cart?</span>
            </div>

            <Button className="m-2 btn-outline-danger" onClick={() => {
              RemoveItem(orderItemIndex);
              onClose();
              toast.success((t) => (
                <span><b>{orderItemName}</b> removed from cart</span>
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
  }

  return (
    <label className="item-delete-btn"><FiTrash onClick={
      () => handleOnItemRemoveClick(orderItemIndex)}/></label>
  );
};

export default ItemDeleteButton;
