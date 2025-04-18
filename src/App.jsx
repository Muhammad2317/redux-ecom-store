
import './App.css';
import Product from './components/Product';
import Button from './components/Button';
import Checkout from './components/Checkout';
import { products, currenciesData } from '../data.js';
import { checkoutSlice } from '../store.js';

export default function App({ state, dispatch }) {
  return (
    <div className="app">
      <div>
        {currenciesData.map((cur) => (
          <button
            key={cur.label}
            onClick={() =>
              dispatch({ type: 'currency/change', payload: cur })
            }
          >
            {cur.label}
          </button>
        ))}
      </div>

      <div className="display_products_grid">
        {products.map((product, index) => (
          <Product
            key={index}
            dispatch={dispatch}
            checkoutSlice={checkoutSlice}
            name={product.name}
            price={product.price}
            image={product.image}
            currency={state.currency}
          />
        ))}
      </div>

      <Checkout state={state.checkoutList} currency={state.currency} dispatch={dispatch} />
    </div>
  );
}

