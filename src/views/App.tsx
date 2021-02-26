import React from "react";
import "./App.scss";

function App() {
  console.log("api", process.env.REACT_APP_DOMAIN);
  fetch(`/api/users`).then((res) => {
    console.log(res);
  });

  return <div className="App">123</div>;
}

export default App;
