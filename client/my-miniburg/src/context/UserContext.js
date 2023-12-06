import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  const authorizeUser = async (userId) => {
    userId ? setAuth(true) : setAuth(false)
  };

  return (
    <UserContext.Provider
      value={{ auth, authorizeUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
