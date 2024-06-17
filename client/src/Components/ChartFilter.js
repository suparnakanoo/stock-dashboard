import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-inherit border-inherit text-neutral-50"
          : "bg-inherit border-inherit text-neutral-500"
      } transition duration-200 hover:bg-neutral-600 hover:text-neutral-50`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
