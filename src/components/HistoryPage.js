import React from 'react';
import {connect} from 'react-redux';
import {
    sortByTransferred,
    sortByRedeemed,
    sortByPurchased,
    showAll
} from './../actions/voucherHistory';
import HistoryList from './HistoryList';
 class HistoryPage extends React.Component{

    render(){
    const optionValue = this.props.vouchers ? this.props.vouchers.sortBy : '';
            return(
                    <div className="historyListContainer">
                        <h1>You can view your voucher history here</h1>
                        <select value={optionValue} onChange={(e)=>{
                                    if (e.target.value==="Transferred")
                                    this.props.dispatch(sortByTransferred());
                                    else if(e.target.value === "Redeemed")
                                    this.props.dispatch(sortByRedeemed());
                                    else if (e.target.value === "Purchased")
                                     this.props.dispatch(sortByPurchased()); 
                                    else if(e.target.value === "All")     
                                     this.props.dispatch(showAll());

                            }}>
                                <option value="Transferred">Transferred</option>
                                <option value="Redeemed">Redeemed</option>
                                <option value="Purchased">Purchased</option>
                                <option value='All'>All</option>
                        </select>
                        <HistoryList sortBy={this.props.vouchers.sortBy}/>
                    </div>
                )     
    }
       
}
const mapStateToPropsComponent = (state)=>{
    return {
        vouchers: state.vouchers
    }
}
export default connect(mapStateToPropsComponent)(HistoryPage);