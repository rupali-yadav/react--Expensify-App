import React from 'react';
import {connect} from 'react-redux';
import HistoryListItem from './HistoryListItem';
import axios from 'axios';
class HistoryList extends React.Component  {
    state = {
        vouchers:[],
        showAll: this.props.sortBy === 'All' ? true : false
    }
    componentDidMount(){
        axios.get('JSON/voucherList.json')
            .then(response => {
                this.setState({
                    showAll: this.props.sortBy === 'All' ? true : false,
                    vouchers: [...response.data.voucherDetailsList]
                })
            })
            .catch(error => {
                console.log("error");
        })
    }
    render(){
    const showAll = this.props.sortBy === 'All' ? true : false;
        return (
                <div>
                    <h1>Voucher List</h1>
                    {!showAll &&
                        this.state.vouchers.map((voucher)=>{
                            if(voucher.status === this.props.sortBy)
                            return <HistoryListItem key = {voucher.id} voucher={voucher}/>
                        })
                    }
                    <div>
                    {
                        showAll &&
                        this.state.vouchers.map((voucher)=>{
                            return <HistoryListItem key = {voucher.id} voucher={voucher}/>
                        })
                    }
                    </div>
                </div>
        )
    }
};

const mapStateToProps =(state)=>{
    return{
        sortBy: state.vouchers.sortBy
    }
}

export default connect(mapStateToProps)(HistoryList);