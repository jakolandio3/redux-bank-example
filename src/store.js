import { combineReducers, createStore } from 'redux';
import {
	createCustomer,
	updateName,
	customerReducer,
} from './features/customers/customerSlice';

import {
	accountReducer,
	deposit,
	withdraw,
	payLoan,
	requestLoan,
} from './features/account/accountSlice';
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer);

store.dispatch(deposit(600));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'but a cheap car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer('Jakob T Douglas', 68742));
console.log(store.getState());

store.dispatch(updateName('Mr. M Milk ESQ.'));
console.log(store.getState());
