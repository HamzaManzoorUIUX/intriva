import { useEffect, useState } from "react";
import { css } from "@emotion/core";
import {SyncLoader} from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function PreLoader(props) {
  let [loading, setLoading] = useState(true);
  const handleLoad=()=>{
    setLoading(!loading)
}
useEffect(() => {
    window.addEventListener('load', handleLoad);
})
  return (
      loading===true?<div className="sweet-loading z-100 position-fixed w-100 h-100vh bg-dark d-flex justify-content-center align-items-center">
      <SyncLoader color={"#E9B34E"} loading={loading} css={override} size={50} />
 </div>:<></>

  );
}

export default PreLoader;