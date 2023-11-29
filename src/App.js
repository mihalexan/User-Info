import User from "./components/User/user";

function App() {
  const numberVar = 19;
  const stringVar = "Hello, React!";
  const booleanVar = true;
  const objectVar = { key: "value" };

  // Возвращаем JSX с передачей переменных в компонент User
  return (
    <div>
      <User
        numberProp={numberVar}
        stringProp={stringVar}
        booleanProp={booleanVar}
        objectProp={objectVar}
      />
    </div>
  );
}

export default App;
