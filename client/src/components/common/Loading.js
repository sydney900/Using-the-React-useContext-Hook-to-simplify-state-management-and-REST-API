import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => (
  <div className="center">
    <BeatLoader />
    <h6>loading...</h6>
  </div>
);

export default Loading;
