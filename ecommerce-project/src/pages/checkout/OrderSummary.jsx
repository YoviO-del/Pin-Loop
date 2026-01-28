import { CartItemDetails } from './CartItemDetails';

export function OrderSummary({ cart, deliveryOptions, loadCart }) {


  return (
    <CartItemDetails deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />
    
  );
}