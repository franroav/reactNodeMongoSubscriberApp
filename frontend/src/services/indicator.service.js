import axios from "axios";
const baseUrl = `https://mindicador.cl/api`;
const getAllIndicators = async () => {
  try {
    return axios({
      method: "get",
      url: baseUrl,
    }).then(
      (result) => {
        return result.data;
      },
      (error) => {
        return { error: "Error: " + error.message };
      }
    );
  } catch (err) {
    return { error: "Error: " + err.message };
  }
};

const getSingleRecord = async (id) => {
  try {
    return axios({
      method: "get",
      url: baseUrl + `/${id}`,
    }).then(
      (result) => {
        return result.data;
      },
      (error) => {
        return { error: "Error: " + error.message };
      }
    );
  } catch (err) {
    return { error: "Error: " + err.message };
  }
};

export { getAllIndicators, getSingleRecord };
