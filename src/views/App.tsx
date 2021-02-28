import React, { useEffect } from "react";
import "./App.scss";
import axiosApi from "../api";
import { useAuth } from "../context/auth-context";

function App() {
  const { loginState } = useAuth();
  console.log("loginState", loginState);
  // RESTFULL API
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
    // axiosApi.post("/users", { name: "hahah" }).then((res) => {
    //   console.log("post", res);
    // });

    // 删
    // axiosApi.delete("/users/6").then((res) => {
    //   console.log("delete", res);
    // });
  }, []);

  // 非RESTFULL API
  useEffect(() => {
    axiosApi
      .post("/login", { username: "jack", password: "123" })
      .then((res) => {
        console.log("login", res);
      });

    axiosApi.post("/register").then((res) => {
      console.log("register", res);
    });
  }, []);

  return <div className="App">123</div>;
}

export default App;
