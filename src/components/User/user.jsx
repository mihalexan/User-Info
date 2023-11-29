import React from "react";
import Info from "../Info/info";

function User(props) {
  const { numberProp, stringProp, booleanProp, objectProp } = props;

  return (
    <div>
      <p>Number: {props.numberProp}</p>
      <p>String: {props.stringProp}</p>
      <p>Boolean: {props.booleanProp ? "True" : "False"}</p>
      <p>Object: {JSON.stringify(props.objectProp)}</p>

      <Info
        numberProp={numberProp}
        stringProp={stringProp}
        booleanProp={booleanProp}
        objectProp={objectProp}
      />
    </div>
  );
}

export default User;
