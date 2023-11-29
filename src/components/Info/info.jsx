import React from "react";

function Info(props) {
  const { numberProp, stringProp, booleanProp, objectProp } = props;

  // Прямая деструктуризация в параметрах функции

  // Используем извлеченные переменные
  console.log("Number Prop in Info:", numberProp);
  console.log("String Prop in Info:", stringProp);
  console.log("Boolean Prop in Info:", booleanProp);
  console.log("Object Prop in Info:", objectProp);

  return (
    <div>
      <h1>Info Components</h1>

      <p>Number: {numberProp}</p>
      <p>String: {stringProp}</p>
      <p>Boolean: {booleanProp ? "True" : "False"}</p>
      <p>Object: {JSON.stringify(objectProp)}</p>
    </div>
  );
}

export default Info;
