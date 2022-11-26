import React from "react";
import "./Loading.css";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className="loading">
      <RingLoader size={80} />
    </div>
  );
};

export default Loading;
