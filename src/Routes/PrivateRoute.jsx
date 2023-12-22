
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from 'lottie-react';
import loadAnim from '../assets/animations/LoadingAnimation.json';


const PrivateRoute = ({children}) => {
    
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
      return children
    }
    else if (loading){
    return <Lottie animationData={loadAnim} />
    }
   return <Navigate state={location.pathname} to='/login'></Navigate>
    
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;