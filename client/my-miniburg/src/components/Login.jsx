import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { login, singUp } from '../actions/user'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
  const auth = useSelector(state => state.auth)
  console.log(auth)

  const { authorizeUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const { email, password } = loginData

  const onChange = e =>
    setLoginData({
      ...loginData,
      [e.target.type]: e.target.value
    })

  const handleSubmit = async e => {
    e.preventDefault()
    if (e.nativeEvent.submitter.textContent === 'Register') {
      await singUp(email, password)
    } else if (e.nativeEvent.submitter.textContent === 'Login') {
      const loggedIn = await login(email, password)

      if (loggedIn) {
        navigate(`/users/${loggedIn._id}`)
        authorizeUser(true)
      }
    }
  }

  return (
    <div className='mt-5 mx-5'>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group className='mb-3 px-5' controlId='formBasicEmail'>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3 px-5' controlId='formBasicPassword'>
          <Form.Control
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </Form.Group>
        <Button variant='success px-5' type='submit' data-action='login'>
          Login
        </Button>
        <br />
        <Button variant='primary px-5 mt-2' type='submit' data-action='register'>
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Login
