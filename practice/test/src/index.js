import React from "react";
import  ReactDOM  from "react-DOM";
import { add,sub,mul,div } from "./Calc";

ReactDOM.render(
    <>
     <ul>
        <li>{add(40,4)}</li>
        <li>{sub(40/4)}</li>
        <li>{mul(40,4)}</li>
        <li>{div(40/4)}</li>
     </ul>
    </>,
    document.getElementById("root")
);