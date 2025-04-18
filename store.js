

import { createStore, combineReducers } from 'redux';

const initialCheckoutState = [];

const checkoutListReducer = (state = initialCheckoutState, action) => {
  switch (action.type) {
    case 'checkoutList/add':
      return [...state, { name: action.payload[0], price: action.payload[1] }];
    case 'checkoutList/remove':
      return state.filter((_, i) => i !== action.payload); // payload = index
    default:
      return state;
  }
};

export const checkoutSlice = (itemName, itemPrice) => {
  return {
    type: 'checkoutList/add',
    payload: [itemName, itemPrice],
  };
};

const initialCurrencyState = { label: '$', rate: 1 };

const currencyReducer = (state = initialCurrencyState, action) => {
  switch (action.type) {
    case 'currency/change':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  checkoutList: checkoutListReducer,
  currency: currencyReducer,
});

const store = createStore(rootReducer);

export default store;

