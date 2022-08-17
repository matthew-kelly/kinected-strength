const Circle = ({ size = "100", color = "fill-black" }) => {
  return (
    <svg width={parseInt(size) * 2} height={parseInt(size) * 2}>
      <circle cx="50%" cy="50%" r={size} className={color} />
    </svg>
  );
};

const Semicircle = ({
  width = "100",
  height = "100",
  color = "fill-black",
  rotate = "0",
}) => {
  return (
    <svg
      width={parseInt(width * 2)}
      height={parseInt(height)}
      transform={`rotate(${rotate})`}
    >
      <ellipse
        cx={width}
        cy={height}
        rx={width}
        ry={height}
        className={color}
      />
    </svg>
  );
};

const Quartercircle = ({
  width = "100",
  height = "100",
  color = "fill-black",
  rotate = "0",
}) => {
  return (
    <svg width={width} height={height} transform={`rotate(${rotate})`}>
      <ellipse cx="0" cy={height} rx={width} ry={height} className={color} />
    </svg>
  );
};

const Rectangle = ({
  width = "100",
  height = "50",
  color = "fill-black",
  rotate = "0",
}) => {
  return (
    <svg width={width} height={height} transform={`rotate(${rotate})`}>
      <rect width={width} height={height} className={color} />
    </svg>
  );
};

const KLogo = ({
  width = "100",
  color = "fill-black",
  colorRect = color,
  colorTop = color,
  colorBottom = color,
  rotate = "0",
}) => {
  return (
    <svg
      width={width}
      height={(width * 57) / 50}
      viewBox="0 0 50 57"
      fill="none"
      transform={`rotate(${rotate})`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_31_307)">
        <path
          d="M26.7249 0H49.9968C49.9968 0 50.7978 30.7845 26.7357 28.7432L26.7249 0Z"
          className={colorTop}
        />
        <path
          d="M26.7898 57.0497L26.7357 28.7432C26.7357 28.7432 51.3607 27.324 49.6938 57.0497H26.7898Z"
          className={colorBottom}
        />
        <path d="M0 0H21.1071V57.0169H0V0Z" className={colorRect} />
      </g>
      <defs>
        <clipPath id="clip0_31_307">
          <rect width="50" height="57" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { Circle, Semicircle, Quartercircle, Rectangle, KLogo };
