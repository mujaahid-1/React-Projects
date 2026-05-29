import { useState } from "react";

const baseStyle = {
  width: "72px",
  height: "72px",
  cursor: "pointer",
};

const buttonStyle = {
  backgroundColor: "transparent",
  border: "none",
};

const textSyle = {
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: 'sans-serif'
}

const FavoriteButton = ({ color, strokeColor }) => {
  const [liked, setLiked] = useState(false);

  const heartStyle = {
    ...baseStyle,
    fill: liked ? color : "none",
    stroke: liked ? strokeColor : "currentColor",
    transition: "all 0.2s ease",
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => setLiked((liked) => !liked)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          style={heartStyle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      {liked && <p style={textSyle}>Added to favourite</p>}
    </div>
  );
};

export default FavoriteButton;
