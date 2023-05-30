import React from "react";

const Stars = () => {
  return (
    <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
      <img
        src="/nightroom.jpg"
        alt="Nightroom"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Stars />
    </div>
  );
};

export default React.memo(StarsCanvas);
