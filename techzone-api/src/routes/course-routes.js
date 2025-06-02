import express from "express";
import{getAllCourses,getCourse,createCourse} from "../controllers/course-controllers.js";

export const router = express.Router();

router.get("/",getAllCourses);
router.get("/:id", getCourse);
router.post("/", createCourse);

