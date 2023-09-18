const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://kokohkoki.com/api/v1"
    : "http://localhost:5001/api/v1";

export default BASE_URL;
