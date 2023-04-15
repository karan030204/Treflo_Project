import React from "react";
function PreLoader(props) {
  return <div id={props.load ? "preloader" : "preloader-none"} className="text-white text-3xl flex justify-center items-center ">Loading...</div>;
}

export default PreLoader;