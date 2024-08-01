import React from "react";

const CustomButton = ({ button, onclick, to }) => {
  return (
    <div>
      <button class="bg-transparent  text-black font- hover:text-black hover:underline py-1 px-3 borderhover:border-transparent rounded f">
        {onclick}
        {button}
      </button>
    </div>
  );
};

export default CustomButton;
