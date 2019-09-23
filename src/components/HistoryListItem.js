import React from 'react';

const HistoryListItem = (props) =>{
    return(
        <div className="voucherListItemContainer">
          <div className="statusContainer">
          {props.voucher.status} on {props.voucher.serviceId}
          </div>
          <div className="voucherDetails">
           <div> Plan-{props.voucher.planName}</div>
           <div>Quanity- {props.voucher.quantity}</div>
           <div>Pincode-{props.voucher.pincode}</div>
           <div>{props.voucher.txnDate}</div>
          </div>
        </div>
    )   
}
export default HistoryListItem;

