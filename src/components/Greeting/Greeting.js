import React from "react";

function Greeting() {
  const [changedText, setChangedText] = React.useState(false);
  const changeTextHandler = () => setChangedText(true);
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Learn React</p>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Text Changed Successfully</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
