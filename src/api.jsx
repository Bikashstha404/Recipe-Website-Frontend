import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5289/api/Recipe",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // console.log("error: ", error.response.status)
    if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const response = await axios.post(
          "http://localhost:5289/api/Auth/RefreshToken",
          {
            accessToken,
            refreshToken,
          }
        );
        console.log("Response: ", response.data)
        const newAccesstoken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;
        // Update the stored access token
        localStorage.setItem("accessToken", newAccesstoken);
        localStorage.setItem("refreshToken", newRefreshToken);
        // Set the new token in the original request
        originalRequest.headers.Authorization = `Bearer ${newAccesstoken}`;
        return api(originalRequest); // Retry the original request
      } catch (refreshError) {
        // Handle refresh token failure (e.g., log out the user)
        console.error("Refresh token failed", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;