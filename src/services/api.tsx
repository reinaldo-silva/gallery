import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjcyNDA2NDEsImV4cCI6MTYyNzMyNzA0MSwic3ViIjoiNjBmZGI4YWEyZGUzMjAwMDMwZmFmYTAzIn0.ZeWrFhsJ_Jxjzor-xIOv7wsFteqHdCqUEpbtuve4Ayg",
  },
});

export default api;
