
export default function Product({ name, price, image, dispatch, checkoutSlice, currency }) {
  const convertedPrice = (price * currency.rate).toFixed(2);

  return (
    <div>
      <img className='product-image' src={image}/>
      <p>{name}</p>
      <p>
        {currency.label} {convertedPrice}
      </p>
      <button onClick={() => dispatch(checkoutSlice(name, price))}>
        Add to cart
      </button>
    </div>
  );
}

