import React from "react";

const Footerbar = () => {
  return (
    <div className="bg-blue-950 text-gray-300 text-center py-4 border-t border-blue-800">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-yellow-400 font-semibold">
          SinghTransports
        </span>{" "}
        — All Rights Reserved
      </p>
    </div>
  );
};

export default Footerbar;
