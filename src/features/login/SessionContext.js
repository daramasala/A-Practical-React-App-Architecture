import React from 'react';

const SessionContext = React.createContext({
  loginSuccess: () => {},
  logout: () => {},
  session: {
    token: null,
    user: null
  }
});

export default SessionContext;