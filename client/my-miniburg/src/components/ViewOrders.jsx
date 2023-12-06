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
      <table className='order-table'>
        <thead>
          <tr>
            <th>User</th>
            <th>Details</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className='order-item'>
              <td>{order.user}</td>
              <td>{order.details}</td>
              <td>{order.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewOrders;
