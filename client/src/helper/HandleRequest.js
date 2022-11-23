import { axiosUserInstance as axiosUser } from "../config/http";

const postRequest = async (route, data) => {
  try {
    const result = await axiosUser.post(route, data);
    return result?.data;
  } catch (error) {
    let errNested = error?.response?.data?.err;
    return {
      success: false,
      errNested,
    };
  }
};

export { postRequest };
