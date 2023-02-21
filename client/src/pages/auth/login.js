import React, { useState } from "react";
import "./auth.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userlogin } from "../../redux/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const formSubmit = async (e) => {
    dispatch(userlogin(e, setLoading, navigate));
  };

  return (
    <section className="contact_main">
      <div className="container">
        <div className="login_section">
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="row">
              <div className="col-md-6 offset-md-3 ">
                <div className="input_fields">
                  <input
                    type="email"
                    placeholder="Email Address..."
                    {...register("email")}
                  />
                  <p className="text-danger">{errors?.email?.message}</p>
                </div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="input_fields common_spacing">
                  <input
                    type="password"
                    placeholder="Password..."
                    {...register("password")}
                  />
                  <p className="text-danger">{errors?.password?.message}</p>
                </div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="input_fields button_input_fields login_btn">
                  <button>{loading === true ? "Loading..." : "Login"}</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

const schema = yup.object({
  email: yup
    .string()
    .email("please enter valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
