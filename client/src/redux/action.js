import { createNotification } from "../common/createNotifactions";
import axios from "../utlis/axios";
import {
  addBlogRoute,
  getAllBlogsRoute,
  getSingleBlogRoute,
  login,
  postContactForm,
  profilefields,
  register,
  userProfile,
} from "../utlis/endpoints";

import {
  ADD_BLOG,
  ADD_CONTACT,
  GET_ALL_BLOGS,
  GET_SINGLE_BLOG,
  LOGIN,
  REGISTER,
  SINGLE_USER,
  UPDATE_USER,
} from "./constant";

export const userlogin = (user, setLoading, navigate) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(login, user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate && navigate("/");
    createNotification("success", "Success", "Login Successful");
    localStorage.setItem("user", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const registerUser =
  (user, setLoading, navigate) => async (dispatch) => {
    setLoading && setLoading(true);
    try {
      const res = await axios.post(register, user);
      localStorage.setItem("userId", res.data.data.id);
      dispatch({ type: REGISTER, payload: res.data });
      navigate && navigate("/profile");
      createNotification("success", "Success", "User Registered Successful");
    } catch (error) {
      console.log(error);
    }
    setLoading && setLoading(false);
  };

export const getuser = (id, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(userProfile(id));
    dispatch({ type: SINGLE_USER, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};

export const addProfiledetails =
  (data, setLoading, navigate) => async (dispatch) => {
    setLoading && setLoading(true);
    try {
      const res = await axios.post(profilefields, data);
      dispatch({ type: UPDATE_USER, payload: res.data });
      console.log(navigate);
      navigate && navigate("/author");
      createNotification("success", "Success", "Details Added Successfully");
    } catch (error) {
      console.log(error);
    }
    setLoading && setLoading(false);
  };

export const addBlog = (data, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(addBlogRoute, data);
    dispatch({ type: ADD_BLOG, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};

export const addContactForm = (data, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(postContactForm, data);
    dispatch({ type: ADD_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};

export const getAllBlogs = (setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.get(getAllBlogsRoute);
    dispatch({ type: GET_ALL_BLOGS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};

export const getSingleBlog = (data, setLoading) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(getSingleBlogRoute, data);
    dispatch({ type: GET_SINGLE_BLOG, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};
