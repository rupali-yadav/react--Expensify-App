import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import expenseReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import voucherHistoryReducer from './../reducers/voucherHistory';
import thunk from 'redux-thunk';

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filterReducer,
            vouchers: voucherHistoryReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};