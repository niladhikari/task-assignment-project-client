

import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";



const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    
    const { 
        loginUser,
        userWithGoogle,
        user
      } =useContext(AuthContext)
        

    
    const handleSubmit =(e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password)
        loginUser(email,password)
        .then(data => {
            console.log(data)
            navigate(location?.state ? location.state : "/dashboard")
            

            
           
        })
        .catch(error => {
            toast.error(`${error.code} dose not match email or password`)
            console.error(error.code)
        })
        

    }
   
    const handleGoogle = () => {
        userWithGoogle()
        .then(data => {
            console.log(data)
            navigate(location?.state ? location.state: "/dashboard")
        })
        .catch(error => {
            
            console.error(error.code)
        })
    }

    return (
        <div>
              <div className="relative">
            <div className="">
           
           
        </div>
        <div className="linear absolute w-[100%] top-[2%]  pb-[10%] ">
           
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{className:"2xl:text-2xl text-center"}}
                
            />
            <h1 className=" text-3xl text-black font-bold text-center mt-8 mb-12 ">Login</h1>
            <div className="w-[80%]  lg:w-[35%] mx-auto">
           
            <div className="hero w-full  bg-base-200">
  <div className=" w-full flex-col ">
  
    <div className=" flex-shrink-0 w-full  h-auto shadow-2xl bg-base-100">
        
      <form onSubmit={handleSubmit} className="card-body w-full h-auto">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" name="email" className="input  input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input type="password" defaultValue={user?.password} placeholder="password" name="password" className="input  input-bordered" required />
          
        </div>
        <div>
          <p className="text-black mt-3  text-center ">New to website ? go for <Link to='/signUp' className="text-yellow-700 font-bold ">Sign up</Link></p>
        </div>
        <div className="form-control mt-6">
         <input type="submit" className=" text-white font-bold cursor-pointer btn-primary py-2 rounded-lg border-none   linear bg-black " value="Login" />
        </div>
      
        <button onClick={handleGoogle}  className="text-red mt-5    text-center hover:before:bg-red rounded-xl font-semibold  relative py-3 w-full overflow-hidden border text-black border-black bg-white px-3 md:px-16 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 hover:text-black before:h-full before:w-0  before:transition-all before:duration-200 hover:border-none hover:d-400 hover:before:left-0 hover:before:w-full"><span className="relative z-10 gap-2 w-max mx-auto flex items-center"><span className=''><AiOutlineGoogle></AiOutlineGoogle></span>Continue with Goggle</span></button>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;