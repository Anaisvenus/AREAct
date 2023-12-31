import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link} from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  // FONCTION DE CONNECTION
  const handleConnection = async (event) => {
    event.preventDefault();
    var pwd = document.getElementById("pwd").value;
    var pswd = document.getElementById("pswd").value;

    if (pwd != pswd) {
      alert("no match")
    } else {
        navigate('/');
    }
  };

  const [email, setemail] = useState();
  const [error, seterror] = useState();
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  // FONCTION DE VALIDATION DE L'EMAIL
  const checking = (e) => {
    e.preventDefault();
    if (regex.test(email) === false) {
      seterror("Invalid email");
    } else {
      seterror('');
      return true;
    }
    setemail(e.target.value)
  }

  const handlepwd = (e) => {
    e.preventDefault();
    setpwd(e.target.value)
  }

  const checkingpwd = () => {
    var pwd = document.getElementById("pwd").value;
    var pswd = document.getElementById("pswd").value;
    if (pwd != pswd) {
      alert("Passwords do not match")
    }
  }

  const [password, setpwd] = useState();
 
  return (
    <div className="Login bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen">
      {/* <Layout> */}
      {/* REGISTER & LOGIN */}
      <div className="flex justify-center">
        <div className="font-semibold uppercase text-violet-800 text-3xl">Login</div>
        {/* REGISTER */}
        <Link
          to="/register"
          className="font-semibold uppercase text-violet-800 text-3xl">
          <span className="">Register</span>
        </Link>
      </div>

      <div className="flex justify-center">
      <form className="bg-gray-100 rounded-lg w-5/12 h-5/6 text-center mt-16">
        {/* EMAIL */}
        <div className="mt-16">
          <label className="my-6 pt-10 font-bold uppercase">E-mail</label><br />
          <input
            className="pt-6 w-9/12 rounded-lg text-violet-900 hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:text-violet-700 border-r-violet-900"
            placeholder="email@example.com"
            id="email"
            name="email"
            type="text"
            required onChange={(e) => checking(e)}
          />
        </div>

        {/* PASSWORD */}
        <div className="mt-16">
          <label className="my-6 pt-6 font-bold uppercase">Password</label><br />
          <input
            className="pt-6 w-9/12 rounded-lg hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:text-violet-700 border-r-violet-900"
            placeholder="Enter Password"
            id="pwd"
            name="pwd"
            type="password"
            minLength={8}
            maxLength={16}
            required onChange={(e) => handlepwd(e)}
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="mt-16">
          <label className="my-6 pt-6 font-bold uppercase">Confirm Password</label><br />
          <input
            className="pt-6 w-9/12 rounded-lg hover:bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:text-violet-700 border-r-violet-900"
            id="pswd"
            name="pswd"
            type="password"
            placeholder="Confirm Password"
            minLength={8}
            maxLength={16}
          />
        </div>

        {/* BUTTON */}
        <div className="mt-16">
          <button
            className="font-bold bg-violet-500 w-32 p-4 rounded-lg hover:bg-gradient-to-r from-violet-800 to-purple-800 uppercase"
            onClick={(event) => handleConnection(event)}
          >
            Submit</button>
        </div>
      </form>
      </div>
      {/* </Layout> */}
    </div>
  );
}

export default Login;
