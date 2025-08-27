import app from "./server.js";

export default function handler(req, res) {
  app(req, res); // Express app ko Vercel handler me wrap kar diya
}
