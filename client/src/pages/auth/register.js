import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./auth.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/action";

const Register = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const formSubmit = async (e) => {
    dispatch(registerUser(e, setLoading));
  };

  return (
    <section className="contact_main">
      <div className="container">
        <div className="login_section">
          <h2>Sign up to see the world</h2>
          <form
            onSubmit={handleSubmit(formSubmit)}
            noValidate
            autoComplete="false"
          >
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
                <div className="input_fields common_spacing">
                  <input
                    type="password"
                    placeholder="Confirm Password..."
                    {...register("confirmpassword")}
                  />
                  <p className="text-danger">
                    {errors?.confirmpassword?.message}
                  </p>
                </div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="input_fields button_input_fields login_btn">
                  <button>
                    {loading === true ? "Loading..." : "Register"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

const schema = yup.object().shape({
  email: yup.string().email().required("This Field is Required"),
  password: yup
    .string()
    .required("This Field is Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Please provide a valid Password."
    ),
  confirmpassword: yup
    .string()
    .required("This Field is Required")
    .oneOf([yup.ref("password"), null], "Password Do not Match"),
});
