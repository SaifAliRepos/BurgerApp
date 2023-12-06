import React, { useEffect, useState } from 'react';
import { getOrders } from '../actions/order';

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order, index) => (
        <div key={index} className='order-item'>
          <h3>User: {order.user}</h3>
          <p>Details: {order.details}</p>
          <p>Payment Method: {order.paymentMethod}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewOrders;
