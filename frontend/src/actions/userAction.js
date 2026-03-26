import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

import axios from "axios";

// ================= LOGIN =================
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= REGISTER =================
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const { data } = await axios.post(
      `/api/v1/register`,
      userData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= LOAD USER =================
export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { token } = getState().user;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`/api/v1/me`, config);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= LOGOUT =================
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= UPDATE PROFILE =================
export const updateProfile = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.put(
      `/api/v1/me/update`,
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= UPDATE PASSWORD =================
export const updatePassword = (passwords) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.put(
      `/api/v1/password/update`,
      passwords,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= FORGOT PASSWORD =================
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const { data } = await axios.post(
      `/api/v1/password/forgot`,
      { email },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= RESET PASSWORD =================
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= ADMIN ALL USERS =================
export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.get(`/api/v1/admin/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= USER DETAILS =================
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.get(`/api/v1/admin/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= UPDATE USER =================
export const updateUser = (id, userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.put(
      `/api/v1/admin/user/${id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= DELETE USER =================
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.delete(`/api/v1/admin/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= CLEAR ERRORS =================
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};