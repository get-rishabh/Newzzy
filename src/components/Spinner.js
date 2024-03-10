import react from "react";
import loading from "./Spinning arrows.gif";

const Spinner = ()=> {
    return (
      <center>
        <img src={loading} alt="Loading..." width={50} className="" />
      </center>
    );
}
export default Spinner
