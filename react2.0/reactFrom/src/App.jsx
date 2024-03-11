import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit= (data) => console.log(data)


  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username" type="text"  {...register("username")}  />
          <input placeholder="password" type="password"  {...register("password")}  />
          <input type="submit"  value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
