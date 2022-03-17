import express from "express";
import {root} from "./response-handler.js";

const app = express();

app.use("/", root);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
