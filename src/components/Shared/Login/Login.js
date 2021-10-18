import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const Login = () => {
    const {user, signInWithGoogle} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <input
            type="email"
            defaultValue=""
            {...register("example", { required: true })}
            placeholder="Enter Your Email"
          />

          {/* Password */}
          <input
            type="password"
            {...register("exampleRequired", { required: true })}
            placeholder="Enter Your Password"
          />
          {/* errors */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div className="icons">
        <Button onClick={signInWithGoogle} className="btn-facebook" variant="outline-info">
        <i class="fab fa-google"></i>
        </Button>
      </div>
    </div>
  );
};

export default Login;
