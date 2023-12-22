import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { AiOutlineGoogle } from "react-icons/ai";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import auth from "../../firebase/firebase.config";

const SignUp = () => {
  const { createUser, userWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    if (password.length < 6) {
      return toast.error(" password should be more than 6 characters");
    } else if (/^[^A-Z]*$/.test(password)) {
      return toast.error("Password must be have at least one capital letter");
    } else if (/^[^!@#$%^&*()_+{}[\]:;<>,.?~\\-]*$/.test(password)) {
      return toast.error("Special character must be included in password");
    }
    createUser(email, password)
      .then((data) => {
        console.log(data);
        if (password.length < 6) {
          return toast.error(" password should be more than 6 characters");
        } else if (/^[^A-Z]*$/.test(password)) {
          return toast.error(
            "Password must be have at least one capital letter"
          );
        } else if (/^[^!@#$%^&*()_+{}[\]:;<>,.?~\\-]*$/.test(password)) {
          return toast.error("Special character must be included in password");
        }

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((errorData) => {
            console.error(errorData.code);
          });

        navigate("/dashboard");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error(error.code);
          return;
        }

        console.error(error.code);
      });
  };
  const handleGoogle = () => {
    userWithGoogle()
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  return (
    <div className="relative">
      <div className=""></div>
      <div className="linear absolute w-[100%] top-[2%]  pb-[10%] ">
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ className: " text-center" }}
        />
        <h1 className=" text-3xl text-black font-bold text-center mt-8 mb-12 ">
          Sign<span className="text-black"> Up</span>
        </h1>
        <div className="w-[80%]  lg:w-[35%] mx-auto">
          <div className="hero w-full  bg-base-200">
            <div className=" w-full flex-col ">
              <div className=" flex-shrink-0 w-full   h-auto shadow-2xl bg-base-100">
                <form
                  onSubmit={handleSubmit}
                  className="card-body w-full h-auto"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  ">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="User Name"
                      className="input   input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  ">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Photo Url"
                      name="photoUrl"
                      className="input   input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  ">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input   input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text  ">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input   input-bordered"
                      required
                    />
                  </div>
                  <div>
                    <p className="text-black mt-3  text-center ">
                      Already a user ? go for{" "}
                      <Link to="/login" className="text-yellow-700 font-bold ">
                        login
                      </Link>
                    </p>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="  font-bold cursor-pointer btn-primary py-2 rounded-lg border-none    linear bg-black text-white hover:bg-black"
                      value="Sign Up"
                    />
                  </div>

                  <button
                    onClick={handleGoogle}
                    className="text-red mt-5     text-center hover:before:bg-red rounded-xl font-semibold  relative py-3 w-full overflow-hidden border border-black text-black  bg-white px-3 md:px-16  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0   before:transition-all before:duration-200 before:border-none before:text-black hover:text-black hover:border-none hover:d-400 hover:before:left-0 hover:before:w-full"
                  >
                    <span className="relative z-10 gap-2 w-max mx-auto flex items-center">
                      <span className="">
                        <AiOutlineGoogle></AiOutlineGoogle>
                      </span>
                      Continue with Goggle
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
