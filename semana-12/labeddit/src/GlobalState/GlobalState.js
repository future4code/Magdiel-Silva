import { GlobalStateContext } from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  const states = { rightButtonText };
  const seters = { setRightButtonText };

  return (
    <GlobalStateContext.Provider value={{states, seters}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
