import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-[#f4f4f4] w-[400px] m-auto px-5 py-5 mt-4">
      {children}
    </div>
  );
};

export default Card;
