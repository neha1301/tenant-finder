import React, { createContext, useContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [authData, setAuthData] = useState({});

  const updateAuth = ({loggedIn, mobile, email,role}) => {
    setAuthData({loggedIn, mobile, email,role});
  }

  const authContextValue = { authData, updateAuth }

  return (
    <AuthContext.Provider
      value={authContextValue}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default { AuthProvider, useAuth: useContext(AuthContext)};
