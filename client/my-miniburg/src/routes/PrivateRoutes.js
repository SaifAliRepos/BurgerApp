import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

export const PrivateRoutes = ({ Component }) => {

  const { auth } = useContext(UserContext);

  if (!auth) {
    return <div className='text-center p-5'>
      <div className="spinner-border p-3 mt-5" role="status">
        <span className="sr-only"></span>
      </div >
      <p>Try to sign in again! Your session might have expired</p>
    </div >
  }
  return <Component />;
}
