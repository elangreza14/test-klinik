import express from "express";
// TODO change database?
import { Database } from "sqlite3";
import deseaseRouter from "../router/desease-router";
import React from "react";
import { render } from "react-dom";
// import Example from "./public/index";

const app = express();
const db = new Database("database.db");

app.use(express.json());
app.use(express.static("public"));

app.use("/desease", deseaseRouter);

// TODO how do you debug typescript code?
app.listen(9000, () => {
  console.log("App is running");
});

// TODO split to separate module
// make router folder

// TODO what's the bug in this method and how to fix it?
app.get("/init", (req, res) => {
  // TODO normalize database
  db.run(`CREATE TABLE diseases(
    id              serial
    name            text
    picture         text
    patient_name    text
    patient_age     int
)`);

  db.run(`CREATE TABLE peoples(
    id              serial
    name            text
    desease_id      int
)`);

  db.run(`INSERT INTO diseases values name
picture
patient_name
patient_age VALUES (test,test,test,test)`);

  db.run(`INSERT INTO peoples values name
picture
desease_id
patient_age VALUES (andi,1)`);

  db.all(`SELECT * FROM diseases`, (err: any, data: any) => {
    res.send(data);
  });

  db.all(
    `  SELECT diseases.name,peoples.name, 
  FROM diseases
  INNER JOIN peoples ON diseases.id = peoples.desease_id;`,
    (err: any, data: any) => {
      res.send(data);
    }
  );

  // TODO sample database join?
});

// TODO create CRUD sample

// TODO create dockerfile
// TODO create docker-compose file
// TODO set CI/CD for the repository
// TODO create unit test




render(<Example />, document.getElementById("app-root"));