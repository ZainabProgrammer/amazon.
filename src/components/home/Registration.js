import ArrowRight from "@mui/icons-material/ArrowRight";
import React, { useState } from "react";
import { darkLogo } from "../../assets";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //   Error handling
  const [errName, seterrName] = useState("");
  const [errPassword, seterrPassword] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [errConfirma, seterrConfirma] = useState("");
  const [errFirebase, seterrFirebase] = useState("");
  // loading state
  const [loading, setloading] = useState(false);
  const [successMessage, setsuccessMessage] = useState("");
  // for navigation:
  const navigate = useNavigate();
  const handleName = (e) => {
    setname(e.target.value);
    seterrName("");
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
    seterrEmail("");
    seterrFirebase("");
  };
  // regex for email validation
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()

      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
    seterrPassword("");
  };
  const handleConfirm = (e) => {
    setconfirmPassword(e.target.value);
    seterrConfirma("");
  };

  const handleData = (e) => {
    e.preventDefault();
    if (!name) {
      seterrName("Enter your name");
    }
    if (!email) {
      seterrEmail("Enter your email");
    } else {
      if (!validateEmail(email)) {
        seterrEmail("Enter a valid email");
      }
    }

    if (!password) {
      seterrPassword("Enter your password");
    }
    if (!confirmPassword) {
      seterrConfirma("Confirm your password");
    }
    if (password.length < 6) {
      seterrPassword("Password should be at least 6 characters long");
    }
    if (password !== confirmPassword) {
      seterrConfirma("Password not matched");
    }
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      password.length >= 6
    ) {
      setname("");
      setemail("");
      setpassword("");
      setconfirmPassword("");
      const auth = getAuth();
      setloading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:
              "https://sg-res.9appsdownloading.com/sg/res/jpg/a9/53/1b33af3b98110cc8a21266fcbf60-u2q.jpg?x-oss-process=style/hq",
          });

          // Signed in
          const user = userCredential.user;

          setloading(false);
          setsuccessMessage("Account created successfully!");
          setTimeout(() => {
            navigate("/signin");
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/email-already-in-use")) {
            seterrFirebase("Email already in use. Try another ");
            setloading(false);
          }
          // ..
        });
    }
  };
  return (
    <div>
      <div class="w-full">
        <div class="w-full bg-gray-100 pb-10">
          <motion.form
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            class="w-full mx-auto flex flex-col items-center"
          >
            <Link to="/">
              <img class="w-48" src={darkLogo} alt="darkLogo" />
            </Link>

            <div class="mdl:w-[350px] w-full border  border-zinc-200 p-6">
              <h2 class="font-titleFont text-3xl font-medium mb-4">
                Create Account
              </h2>
              <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Your name</p>
                  <input
                    type="text"
                    class="w-full py-1 border border-gray-200 px-2 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput duration-100"
                    onChange={handleName}
                    value={name}
                  />
                  {errName && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic">! </span>
                      {errName}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Email</p>
                  <input
                    type="email"
                    class="w-full lowercase py-1 border border-gray-200 px-2 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput duration-100"
                    onChange={handleEmail}
                    value={email}
                  />
                  {errEmail && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic">! </span>
                      {errEmail}
                    </p>
                  )}
                  {errFirebase && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic">! </span>
                      {errFirebase}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Password</p>
                  <input
                    type="password"
                    class="w-full py-1 border border-gray-200 px-2 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput duration-100"
                    onChange={handlePassword}
                    value={password}
                  />
                  {errPassword && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic">! </span>
                      {errPassword}
                    </p>
                  )}
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Re-enter Password</p>
                  <input
                    type="password"
                    class="w-full py-1 border border-gray-200 px-2 text-base rounded-sm outline-none focus-within:border-yellow-300 focus-within:shadow-amazonInput duration-100"
                    onChange={handleConfirm}
                    value={confirmPassword}
                  />
                  {errConfirma && (
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                      <span className="italic">! </span>
                      {errConfirma}
                    </p>
                  )}
                  <p class="text-xs text-gray-600">
                    Passwords must be at least 6 characters.
                  </p>
                </div>
                <button
                  class="w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
                  onClick={handleData}
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
                {successMessage && (
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-500 text-base border-[1px] border-green-500 font-semibold font-titleFont px-2 text-center"
                  >
                    {successMessage}
                  </motion.p>
                )}
              </div>
              <p class="text-xs text-black leading-4 mt-4">
                By Continuing, you agree to Amazon's{" "}
                <span class="text-blue-600">Conditions of Use </span>and{" "}
                <span class="text-blue-600">Privace Notice.</span>
              </p>
              <div>
                <p class="text-xs text-black">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                      Sign in{" "}
                      <span>
                        <ArrowRight />
                      </span>
                    </span>
                  </Link>
                </p>
                <p class="text-xs text-black -mt-2">
                  Buying for work?{" "}
                  <span class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                    Create a free business account
                  </span>
                </p>
              </div>
            </div>
          </motion.form>
        </div>
        <div class="w-full bg-gradient-to-t from-white via-white to-gray-200 flex flex-col gap-4 justify-center items-center py-10">
          <div class="flex items-center gap-6">
            <p class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Conditions of Use
            </p>
            <p class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
            <p class="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
              Privacy Notice
            </p>
          </div>
          <p class="text-xs text-gray-600">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
