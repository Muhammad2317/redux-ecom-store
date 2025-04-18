
export default function Checkout({ state, currency, dispatch }) {
  const total = state.reduce((sum, item) => sum + item.price, 0);
  const convertedTotal = (total * currency.rate).toFixed(2);

  return (
    <div>
      <div className="checkout__left">
        {state.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>
              {currency.label} {(item.price * currency.rate).toFixed(2)}
            </p>
            <button onClick={() => dispatch({ type: 'checkoutList/remove', payload: index })}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h2>Total: {currency.label} {convertedTotal}</h2>
    </div>
  );
}

