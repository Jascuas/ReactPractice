import React, { useRef, useEffect, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  let length = props.personsLength;

  if (length <= 2) assignedClasses.push(classes.red);

  if (length <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked} ref={toggleBtnRef}>
        Switch Name
      </button>
        <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
