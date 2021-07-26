import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjcyNDc1ODYsImV4cCI6MTYyNzMzMzk4Niwic3ViIjoiNjBmZGI4YWEyZGUzMjAwMDMwZmFmYTAzIn0.Zp6iMXUAvWtC4ZxtlEJEs7Vy7oZQ4n0DHKf4Wo0w4JA",
  },
});

export default api;
