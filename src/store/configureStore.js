import { createStore,combineReducers } from 'redux';
import expenseReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import voucherHistoryReducer from './../reducers/voucherHistory';

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            vouchers: voucherHistoryReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};