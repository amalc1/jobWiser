import { axiosUserInstance as axiosUser } from "../config/http";

const postRequest = async (route, data) => {
  try {
    const result = await axiosUser.post(route, data);
    return result.data;
} catch (err) {
    return {
      success: false,
      err,
    };
  }
};

export { postRequest };
