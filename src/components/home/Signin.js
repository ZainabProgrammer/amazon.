import React, { useState } from "react";
import { darkLogo } from "../../assets";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/ProductsSlice";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [errPassword, seterrPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [successMessage, setsuccessMessage] = useState("");
  const [errUser, seterrUser] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setemail(e.target.value);
    seterrEmail("");
    seterrUser("");
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
    seterrPassword("");
    seterrUser("");
  };

  const handleData = (e) => {
    e.preventDefault();
    if (!email) {
      seterrEmail("Enter your email");
    }
    if (!password) {
      seterrPassword("Enter your password");
    }
    if (email && password) {
      setemail("");
      setpassword("");
      seterrUser("");
      setloading(false);

      const auth = getAuth();
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            addUser({
              _id: user.uid,
              userName: user.displayName,
              image: user.photoURL,
              email: user.email,
            })
          );
          setloading(false);
          setsuccessMessage("Logged in successfully! Welocme back");
          setTimeout(() => {
            navigate("/");
          }, 3000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-email")) {
            seterrEmail("Invalid Email");
            setloading(false);
          }
          if (errorCode.includes("auth/wrong-password")) {
            seterrPassword("Wrong password! Try again");
            setloading(false);
          }
          if (errorCode.includes("auth/user-not-found")) {
            seterrUser("User not found!");
            setloading(false);
          }
        });
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-full ">
          {successMessage ? (
            <div className="text-green-500 text-base  w-full flex justify-center py-32 font-semibold font-titleFont px-2 text-center">
              <p className="">{successMessage}</p>
            </div>
          ) : (
            <motion.form
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto sm:w-[350px] w-full  flex flex-col items-center "
            >
              <Link to="/">
                <img src={darkLogo} className="w-48" alt="amazon" />
              </Link>

              <div className="w-full border mb-2 border-gray-200 p-5">
                <h3 className="font-titleFont text-3xl mb-4 font-medium">
                  Sign in
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium  ">
                      Email or phone number
                    </p>
                    <input
                      onChange={handleEmail}
                      value={email}
                      type="email"
                      className="w-full lowercase px-3 py-1 border border-gray-200 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput"
                    />
                    {errEmail && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        <span className="italic">! </span>
                        {errEmail}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium  ">Password</p>
                    <input
                      value={password}
                      onChange={handlePassword}
                      type="password"
                      className="w-full lowercase px-3 py-1 border border-gray-200 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput"
                    />
                    {errPassword && (
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                        <span className="italic">! </span>
                        {errPassword}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleData}
                    className="w-full py-2 my-2 text-sm font-normal rounded-sm bg-gradient-to-t from-[#edd9aa] to-[#f0c14b] hover:bg-gradient-to-b  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput "
                  >
                    Continue
                  </button>
                  {loading && (
                    <div className="flex justify-center">
                      <RotatingLines
                        strokeColor="#febd69"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="50"
                        visible={true}
                      />
                    </div>
                  )}
                  {errUser && (
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-red-500 text-base  font-semibold font-titleFont px-2 text-center"
                    >
                      {errUser}
                    </motion.p>
                  )}
                  <p className="text-xs text-black leading-4 mt-4">
                    By Continuing, you agree to Amazon's{" "}
                    <span className="text-blue-600">Conditions of Use </span>and{" "}
                    <span className="text-blue-600">Privace Notice.</span>
                  </p>
                  <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                    {" "}
                    <ArrowRightIcon />
                    <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                      Need help?
                    </span>
                  </p>
                </div>
                <p className="w-full justify-center text-xs text-gray-700 mt-4 flex items-center text-center">
                  <span className=" w-1/3 h-[1px] bg-gray-400 inline-flex"></span>
                  <span className="w-1/3">New to Amazon?</span>
                  <span className="w-1/3 h-[1px] bg-gray-400 inline-flex"></span>
                </p>
                <Link to="/registration" className="w-full  text-gray-800">
                  <button className=" w-full py-1.5  mt-4 my-2 text-gray-800 text-sm font-black rounded-sm bg-gradient-to-t from-gray-200 to-gray-100 hover:bg-gradient-to-b border border-gray-400 active:border-yellow-800 active:shadow-amazonInput">
                    Create your Amazon account
                  </button>
                </Link>
              </div>
            </motion.form>
          )}
        </div>
        <div className="w-full  bg-gradient-to-t from-white via-white to-gray-200 flex flex-col gap-4 justify-center items-center py-10">
          <div className="flex items-center gap-6">
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Conditions of Use
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
            <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
          </div>
          <p className="text-xs text-gray-600">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
