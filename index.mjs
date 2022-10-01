import express from "express";
import { engine } from "express-handlebars";

import conn from "./db/conn.mjs";
import Task from "./models/Task.mjs";
import tasksRouter from "./routes/tasksRoutes.mjs";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/tasks", tasksRouter);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
