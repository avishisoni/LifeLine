import React from "react";

const Login = () => {
    return (
      <div className="flex flex-col justify-center items-center m-10 bg-red-100 h-90">
        <h2 className="text-3xl m-8 font-bold">Login</h2>
        <form>
          <div>
            <label htmlFor="username" className="text-xl">Username:</label>
            <input type="text" id="username" name="username" className="border-2 rounded-lg m-2 p-1" />
          </div>
          <div>
            <label htmlFor="password" className="text-xl">Password:</label>
            <input type="password" id="password" name="password" className="border-2 rounded-lg m-2 p-1" />
          </div>
          <div className="flex justify-center ">
          <button type="submit" className=" bg-blue-600 w-6/6 h-10 text-white rounded-lg hover:bg-blue-500 cursor-pointer">Login</button>
          </div>
          <div className="flex m-3 text-base">
  <p>Dont have an account?</p><a href="#" className="text-blue-600 hover:text-blue-500">Sign Up</a>
          </div>
        </form>
      </div>
    );
  };
 
  export default Login;