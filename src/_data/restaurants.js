const { default: Axios } = require("axios");

module.exports = async () => {
  const result = await Axios.get("http://localhost:1337/restaurants");
  console.log(result.data);
  return result.data;
};
