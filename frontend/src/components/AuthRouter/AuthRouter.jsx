import React from "react";
import {userTokenStorage} from "../../services/storageServices/local";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRouter =  ({ children }) => {
  const Token = userTokenStorage();
  console.log('AuthRouter token: ',Token)

  if (!Token) {
    return <Navigate to="/" /> 
  } else {   
    return children
  }
};

export default AuthRouter;
