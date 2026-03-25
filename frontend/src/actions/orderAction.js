import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

import axios from "axios";

// ENV URL
const API = process.env.REACT_APP_API_URL || "";

// ================= CREATE ORDER =================
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.post(
      `${API}/api/v1/order/new`,
      order,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= MY ORDERS =================
export const myOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.get(
      `${API}/api/v1/orders/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= ADMIN ALL ORDERS =================
export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.get(
      `${API}/api/v1/admin/orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= UPDATE ORDER =================
export const updateOrder = (id, order) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.put(
      `${API}/api/v1/admin/order/${id}`,
      order,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= DELETE ORDER =================
export const deleteOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.delete(
      `${API}/api/v1/admin/order/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= ORDER DETAILS =================
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { token } = getState().user;

    const { data } = await axios.get(
      `${API}/api/v1/order/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ================= CLEAR ERRORS =================
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};