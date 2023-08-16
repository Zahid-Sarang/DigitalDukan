import React from "react";
import { useSelector } from "react-redux";
import {selectLoggedInUser} from "../../state/auth/authSlice";

import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  if (!user) {
    return <Navigate to="/signin" replace={true}></Navigate>;
  }
  return children;
};

export default Protected;
