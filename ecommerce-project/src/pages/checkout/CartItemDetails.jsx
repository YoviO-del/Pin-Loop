import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { useState } from "react";


export function CartItemDetails({ deliveryOptions, cart, loadCart }) {

    const [isUpdated, setIsUpdated] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const quantityInput = (event) => {
        setQuantity(Number(event.target.value))
    }



    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`);
                    await loadCart();
                };

                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {cartItem.product.name}
                                </div>
                                <div className="product-price">
                                    {formatMoney(cartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">
                                            <input onKeyDown={async (event) => {
                                                if(event.key === 'Enter'){
                                                    if(isUpdated){
                                                        await axios.post(`/api/cart-items/:${cartItem.productId}`, {
                                                            productId: cartItem.productId,
                                                            quantity
                                                        })
                                                        loadCart()
                                                        setIsUpdated(false)
                                                    } else {
                                                        setIsUpdated(true);
                                                    }
                                                } else if(event.key === 'Escape'){
                                                    setQuantity(cartItem.qu)
                                                    setIsUpdated(false)
                                                }
                                            }} value={quantity} onChange={quantityInput} type='text' className='quantity-input' style={{ display: isUpdated ? "inline" : "none" }} />
                                            {cartItem.quantity}
                                        </span>
                                    </span>

                                    <span className="update-quantity-link link-primary" onClick={async () => {


                                        if (isUpdated) {
                                            await axios.post(`/api/cart-items/:${cartItem.productId}`, {
                                                productId: cartItem.productId,
                                                quantity
                                            })
                                            loadCart()
                                            setIsUpdated(false)
                                        } else {
                                            setIsUpdated(true)
                                        }
                                    }}>
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary"
                                        onClick={deleteCartItem}>
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}