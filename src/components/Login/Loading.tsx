import React from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex items-center justify-center min-h-screen p-4 bg-gray-100 cursor-pointer"
      style={{
        backgroundImage: "url(/lunchbox.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute text-4xl font-semibold text-center text-white font-roboto bg-black bg-opacity-70 rounded-lg max-w-[400px] p-16 m-6">
        Lunch Box <br />
        qui simplifie <br />
        votre quotidien !
      </h1>
    </div>
  );
}
