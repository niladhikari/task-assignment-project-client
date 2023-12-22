import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    const location = useLocation();

    const noHeaderFooter =
      location.pathname.includes("login") ||
      location.pathname.includes("signUp");
    return (
        <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <div className=" min-h-[calc(100vh-225px)] max-w-7xl mx-auto">
          <Outlet></Outlet>
        </div>
        <div className='mt-10'> 
        {noHeaderFooter || <Footer></Footer>}
        </div>
      </div>
    );
};

export default Root;