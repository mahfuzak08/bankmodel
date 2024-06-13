import axios from "axios";
import BASE_URL from "../../../../config/config";

const API_URL = BASE_URL + "/api/users/";
const API_URL_REQUEST = BASE_URL + "/api/request/create";

//Get User
const getUser = async (userData) => {
  const res = await axios.get(API_URL + userData.id, {
    headers: {
      authorization: `Bearer ${userData.token}`,
    },
  });

  const data = res.data;

  return data;
};

//UPDATE User
const updateUser = async (userData) => {
  const res = await axios.put(API_URL + userData.id, userData, {
    headers: {
      authorization: `Bearer ${userData.token}`,
    },
  });

  const data = res.data;

  return data;
};

//Create Account Request
const accountRequest = async (userData) => {
  const res = await axios.post(API_URL_REQUEST, userData, {
    headers: {
      authorization: `Bearer ${userData.token}`,
    },
  });

  const data = res.data;

  return data;
};

//Notification Update
const notificationUpdate = async (payload) => {
  const res = await axios.put(
    API_URL + "notifications/" + payload.notificationId,
    payload,
    {
      headers: {
        authorization: `Bearer ${payload.token}`,
      },
    }
  );

  const data = res.data;

  return data;
};

//User Logout
const userLogout = () => {
  return;
};

const userServices = {
  getUser,
  updateUser,
  userLogout,
  accountRequest,
  notificationUpdate,
};

export default userServices;
