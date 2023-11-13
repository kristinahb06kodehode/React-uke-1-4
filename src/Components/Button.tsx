// ./Components/Button.tsx

import React from "react";

interface ButtonProps {
  likeButton?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ likeButton, onClick }) => {
  return (
    <button className={likeButton} onClick={onClick}>
      <svg
        className="heart-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
      >
        <path
          d="M7.5 13.3438L6.59375 12.5188C3.375 9.6 1.25 7.66875 1.25 5.3125C1.25 3.38125 2.7625 1.875 4.6875 1.875C5.775 1.875 6.81875 2.38125 7.5 3.175C8.18125 2.38125 9.225 1.875 10.3125 1.875C12.2375 1.875 13.75 3.38125 13.75 5.3125C13.75 7.66875 11.625 9.6 8.40625 12.5188L7.5 13.3438Z"
          fill="#500724"
        />
      </svg>
    </button>
  );
};

export default Button;
