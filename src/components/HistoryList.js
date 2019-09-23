import React from 'react';
import {connect} from 'react-redux';
import HistoryListItem from './HistoryListItem';
const vouchers = { 
    "voucherDetailsList": [{
            "trNumber": "BV0000003E6X",
            "planName": "Cashback Voucher of Rs. 50",
            serviceId: 9082618244,
            "quantity": 1,
            "status": "Transferred",
             "pincode": 400703,
            "txnDate": "09 Sep, 2019 05:24 PM",
            "dateValue": 1568030093000,
    
},
{
        "trNumber": "BV0056438803E6X",
        "planName": "Cashback Voucher of Rs. 1080",
         serviceId: 9082665393,
        "quantity": 1,
         "pincode": 400701,
        "status": "Transferred",
        "txnDate": "09 Sep, 2019 05:24 PM",
        "dateValue": 1568030093000,

    },
{
    "trNumber": "BV09006756X",
    "planName": "ADD ON - MRP 301",
     serviceId: 7632618291,
    "quantity": 1,
     "pincode": 400708,
    "status": "Redeemed",
    "txnDate": "09 Sep, 2019 05:24 PM",
    "dateValue": 1568030093000,

},
{
    "trNumber": "BV3412003E6X",
    "planName": "JP MRP 99",
     serviceId: 7882618291,
    "quantity": 1,
    "pincode":400708,
    "status": "Purchased",
    "txnDate": "09 Sep, 2019 05:24 PM",
    "dateValue": 1568030093000,
}
]
}

const HistoryList = (props) => {
    const showAll = props.sortBy==='All'? true: false;
    return (
        <div>
            <h1>Voucher List</h1>
            {!showAll &&
                vouchers.voucherDetailsList.map((voucher)=>{
                    if(voucher.status === props.sortBy)
                    return <HistoryListItem key = {voucher.trNumber} voucher={voucher}/>
                })
            }
            <div>
            {
                showAll &&
                vouchers.voucherDetailsList.map((voucher)=>{
                    return <HistoryListItem key = {voucher.trNumber} voucher={voucher}/>
                })
            }
            </div>
        </div>
        )
    };

const mapStateToProps =(state)=>{
    return{
        sortBy: state.vouchers.sortBy
    }
}

export default connect(mapStateToProps)(HistoryList);