import React from "react";
import BannerTwo from "../../common/Banner/BannerTwo";
import "./contact.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addContactForm } from "../../redux/action";

function Contact() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const formSubmit = (e) => {
    dispatch(addContactForm(e));
  };

  return (
    <section className="contact_main">
      <div className="container">
        <BannerTwo
          title={"Want to know more"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor"
        />
        <div className="contact_section">
          <h2>
            We're a team of makers, thinkers, explorers and theatre singers.
          </h2>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="input_fields">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("name")}
                  />
                  <p className="text-danger">{errors?.name?.message}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_fields">
                  <input
                    type="text"
                    placeholder="Email Address..."
                    {...register("email")}
                  />
                  <p className="text-danger">{errors?.email?.message}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_fields">
                  <textarea placeholder="Message..." {...register("message")} />
                  <p className="text-danger">{errors?.message?.message}</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_fields button_input_fields">
                  <button type="submit">Contact Us</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

const schema = yup.object().shape({
  name: yup.string().required("This Field is Required"),
  email: yup.string().email().required("This Field is Required"),
  message: yup.string(),
});
