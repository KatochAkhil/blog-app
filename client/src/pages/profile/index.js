import React, { useState } from "react";
import BannerTwo from "../../common/Banner/BannerTwo";
import Upload from "./steps/Upload";
import "./profile.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addProfiledetails } from "../../redux/action";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [tab, settab] = useState(1);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const formSubmit = (e) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", userId);
    formData.append("number", e.number);
    formData.append("name", e.name);
    formData.append("profession", e.profession);
    formData.append("interest", e.interest);
    formData.append("bio", e.bio);
    dispatch(addProfiledetails(formData, setLoading, navigate));
  };

  return (
    <section className="profile">
      <div className="container">
        <BannerTwo
          title="Create your Profile Today"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor"
        />
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className={tab === 1 ? "upload_profile_image" : "d-none"}>
            <Upload setFile={setFile} setStep={() => settab(2)} />
          </div>
          <div className={tab === 2 ? "profile_steps" : "d-none"}>
            <div className="contact_section">
              <div className="contact_section_heading">
                <h2>Fill your Personal Details</h2>
                <button
                  onClick={() => {
                    settab(1);
                  }}
                >
                  Back
                </button>
              </div>
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input_fields">
                      <input
                        type="text"
                        placeholder="Full Name ..."
                        {...register("name")}
                      />
                      {errors?.name?.message && (
                        <p className="text-danger">{errors?.name?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_fields">
                      <input
                        type="number"
                        placeholder="Phone Number ..."
                        {...register("number")}
                      />
                      {errors?.number?.message && (
                        <p className="text-danger">{errors?.number?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_fields common_spacing">
                      <input
                        type="text"
                        placeholder="Profession ..."
                        {...register("profession")}
                      />
                      {errors?.profession?.message && (
                        <p className="text-danger">
                          {errors?.profession?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_fields common_spacing">
                      <input
                        type="text"
                        placeholder="Interest... (eg - Sports, News, Technology etc...)"
                        {...register("interest")}
                      />
                      {errors?.interest?.message && (
                        <p className="text-danger">
                          {errors?.interest?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input_fields">
                      <textarea placeholder="Bio..." {...register("bio")} />
                      {errors?.bio?.message && (
                        <p className="text-danger">{errors?.bio?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input_fields button_input_fields">
                      <button type="submit">
                        {loading ? "Loading..." : " Upload Details"}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Profile;

const schema = yup.object({
  name: yup.string().required("This Field is Required"),
  number: yup.string().required("This Field is Required"),
  profession: yup.string().required("This Field is Required"),
  interest: yup.string().required("This Field is Required"),
  bio: yup.string().required("This Field is Required"),
});
