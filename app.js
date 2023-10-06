import express from "express";
import dotenv from "dotenv";
import applyMiddleware from "./middleware/index.js";
import { useRouter } from "./routes/method.js";
import { securityRouter } from "./routes/security.js";

dotenv.config();

const app = express();
applyMiddleware(app);
const port = process.env.PORT || 3000;

app.use("/http", useRouter);
app.use("/security", securityRouter);

// Landing
export const Landing = (req, res) => {
  res.send("Simple API with CORS");
};

// Not Found
app.get("*", (req, res) => {
  let body = `<h1>Error Page not found</h1>`;
  res.send(body);
});

// Port
app.listen(port, () => {
  console.log(`[server]: Server is running at localhost:${port}`);
});
