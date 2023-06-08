import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/current.json?key=e0667d3db1df4875a6c54342231605&q=",
});

const instance2 = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/forecast.json?key=e0667d3db1df4875a6c54342231605&q=",
});

// export default instance;

export default { instance, instance2 };
