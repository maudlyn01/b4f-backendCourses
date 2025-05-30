import express from "express";
import dotenv from "dotenv";
import courseRouter from "./src/routes/course-routes.js";

const app =express();
dotenv.config({ path: "./techzone-api/.env" });
 app.use(express.json());

const host=process.env.HOST;
const port=process.env.PORT;
app.use("/courses",courseRouter);
app.use("/course",courseRouter);

app.listen(port,()=>{
    console.log (`Servidor correndo no ${host}:${port}`);
});


