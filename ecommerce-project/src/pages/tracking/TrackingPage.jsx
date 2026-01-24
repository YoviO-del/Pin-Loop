import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import dayjs from 'dayjs';
import axios from 'axios';
import './TrackingPage.css';

export function TrackingPage({ cart }) {
    const { orderId, productId } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchTrackData = async () => {
            const response = await axios(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }

        fetchTrackData();
    }, [orderId]);

    if(!order){
        return null;
    }

    const product = order.products.find(
        p => (productId) === p.productId
    );

    // gets  the total time required for delivery
    const totalDeliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs;

    // calculates the amount of time that has passed since creating the order
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    
    let calculatedDeliveryPercent = (timePassedMs/totalDeliveryTimeMs) * 100;

    if(calculatedDeliveryPercent > 100){
        calculatedDeliveryPercent = 100;
    }
    
    

    return (
        <>
            <title>Tracking</title>
            <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">

                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {calculatedDeliveryPercent >= 100 && "Delivered on"} {dayjs(product.estimatedDeliveryTimeMs).format('MMMM D')}
                    </div>
                    <div className="product-info">
                        {product.name}
                    </div>
                    <div className="product-info">
                        Quantity: {product.quantity}
                    </div>
                    <img className="product-image" src={product.product.image} />
                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${calculatedDeliveryPercent}%`}}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}