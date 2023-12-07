import React, { Fragment, useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../context/UserContext'
import Order from './Order'
import { useParams } from 'react-router-dom'

function Burger() {
  const { auth } = useContext(UserContext)

  const { user_id } = useParams()
  const [modalShow, setModalShow] = useState(false)

  const [lettuce, setLettuce] = useState(0)
  const [cheese, setCheese] = useState(0)
  const [bacon, setBacon] = useState(0)
  const [meat, setMeat] = useState(0)

  const addMeat = () => {
    setMeat(prev => prev + 1)
  }
  const removeMeat = () => {
    setMeat(prev => (prev > 0 ? prev - 1 : prev))
  }

  const addBacon = () => {
    setBacon(prev => prev + 1)
  }
  const removeBacon = () => {
    setBacon(prev => (prev > 0 ? prev - 1 : prev))
  }

  const addCheese = () => {
    setCheese(prev => prev + 1)
  }
  const removeCheese = () => {
    setCheese(prev => (prev > 0 ? prev - 1 : prev))
  }

  const addLettuce = () => {
    setLettuce(prev => prev + 1)
  }
  const removeLettuce = () => {
    setLettuce(prev => (prev > 0 ? prev - 1 : prev))
  }

  const handleClick = () => {
    if (auth) {
      setModalShow(true)
    }
  }

  return (
    <Fragment>
      <div className='box mt-4 mn-5'>
        <div className='bread-top'>
          <div className='seeds'></div>
          <div className='seeds2'></div>
        </div>

        {Array.from({ length: lettuce }, (_, index) => (
          <div key={index} className='salad'></div>
        ))}

        {Array.from({ length: bacon }, (_, index) => (
          <div key={index} className='bacon'></div>
        ))}

        {Array.from({ length: cheese }, (_, index) => (
          <div key={index} className='cheese'></div>
        ))}

        {Array.from({ length: meat }, (_, index) => (
          <div key={index} className='meat'></div>
        ))}
        {lettuce < 1 && cheese < 1 && bacon < 1 && meat < 1 && <h3>You haven`t Added Anything</h3>}
        <div className='bread-bottom'></div>
      </div>

      <div className='bg-brown-light text-center p-3'>
        <div className='my-2'>
          <span className='mx-2 font-weight-bold' style={{ fontSize: '1.5rem' }}>
            Lettuce{' '}
          </span>
          <Button onClick={removeLettuce} variant='white' size='md' active>
            Less
          </Button>
          {'   '}
          <Button onClick={addLettuce} variant='light' size='md' active>
            More
          </Button>
        </div>
        <div className='my-2'>
          <span className='mx-3 font-weight-bold' style={{ fontSize: '1.5rem' }}>
            Bacon{' '}
          </span>
          <Button onClick={removeBacon} variant='white' size='md' active>
            Less
          </Button>
          {'   '}
          <Button onClick={addBacon} variant='light' size='md' active>
            More
          </Button>
        </div>
        <div className='my-2'>
          <span className='mx-2 font-weight-bold' style={{ fontSize: '1.5rem' }}>
            Cheese{' '}
          </span>
          <Button onClick={removeCheese} variant='white' size='md' active>
            Less
          </Button>
          {'    '}
          <Button onClick={addCheese} variant='light' size='md' active>
            More
          </Button>
        </div>
        <div className='my-2'>
          <span className='mx-4 font-weight-bold' style={{ fontSize: '1.5rem' }}>
            Meat
          </span>
          <Button onClick={removeMeat} variant='white' size='md' active>
            Less
          </Button>
          {'   '}
          <Button onClick={addMeat} variant='light' size='md' active>
            More
          </Button>
        </div>
        <Button
          className='ml-4 mt-2 px-5'
          onClick={handleClick}
          variant='warning'
          size='md'
          active
          disabled={user_id ? false : true}
        >
          {user_id ? 'Place Order' : 'Sign In To Order'}
        </Button>
        <Order setModalShow={setModalShow} show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </Fragment>
  )
}

export default Burger
