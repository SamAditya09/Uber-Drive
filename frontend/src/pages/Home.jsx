import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center  bg-[url(https://cdn.dribbble.com/userupload/14226567/file/original-3ae7bf07efa19e24dcbe5ee55928248f.png?resize=1024x1024&vertical=center)] h-screen pt-8 flex justify-between  flex-col w-full bg-red-400">
        <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2>Get Started with Uber</h2>
          <Link to={"/login"} className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
