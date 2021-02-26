import React, { useEffect } from "react";
import "./App.scss";
import axiosApi from "../api";

function App() {
  useEffect(() => {
    // 查
    axiosApi.get("/users").then((res) => {
      console.log("get", res);
    });

    // 改
    // axiosApi.patch("/users/5", { name: 6666 }).then((res) => {
    //   console.log("patch", res);
    // });

    // 增
    axiosApi.post("/users", { name: "hahah" }).then((res) => {
      console.log("post", res);
    });

    // 删
    // axiosApi.delete("/users/6").then((res) => {
    //   console.log("delete", res);
    // });
  }, []);

  return <div className="App">123</div>;
}

export default App;
