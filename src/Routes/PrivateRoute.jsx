
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
      return children
    }
    else if (loading){
    return <span className="loading loading-spinner text-yellow-500 text-7xl w-[2%] absolute top-[40%] left-[50%]"></span>
    }
   return <Navigate state={location.pathname} to='/login'></Navigate>
    
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;