import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { submitOrder } from '../actions/order';

function Order(props) {
  const [orderData, setOrderData] = useState({
    name: '',
    address: '',
    paymentMethod: '',
  });
  const { name, address, paymentMethod } = orderData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = await submitOrder(name, address, paymentMethod);
    if (order) {
      console.log(name, address, paymentMethod);
      props.setModalShow(false);
    }
  };

  const onChange = (e) =>
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });

  return (
    <div>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='text-center'
      >
        <Modal.Body className='mt-3'>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className='mb-3 px-5' controlId='formBasicName'>
              <Form.Control
                type='text'
                name='name'
                placeholder='Enter email'
                value={name}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3 px-5' controlId='formBasicAddress'>
              <Form.Control
                type='text'
                name='address'
                placeholder='Address'
                value={address}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>

            <Form.Group className='mb-3 px-5' controlId='formBasicPayment'>
              <Form.Control
                type='text'
                name='paymentMethod'
                placeholder='Payment Mode'
                value={paymentMethod}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Button variant='success px-5' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Order;
