import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { login } from '../actions/user';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { authorizeUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { email, password } = loginData;

  const onChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.type]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedIn = await login(email, password);
    if (loggedIn) {
      navigate(`/users/${loggedIn._id}`);
      authorizeUser(true);
    }
  };

  return (
    <div className='mt-5 mx-5'>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3 px-5' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Form.Group className='mb-3 px-5' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </Form.Group>
        <Button variant='success px-5' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
