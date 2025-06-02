import express from "express";
import dotenv from "dotenv";
import {router} from "./src/routes/course-routes.js";
import {userRoute} from "./src/routes/user-routes.js";

const app =express();
dotenv.config({ path: "./techzone-api/.env" });
 app.use(express.json());

const host=process.env.HOST;
const port=process.env.PORT;
app.use("/courses",router);
app.use("/users",userRoute);

app.listen(port,()=>{
    console.log (`Servidor correndo no ${host}:${port}`);
});


