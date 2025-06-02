import express from "express";
import{getAllCourses,getCourse,createCourse,updateCourse,deleteCourse} from "../controllers/course-controllers.js";

export const router = express.Router();

router.get("/",getAllCourses);
router.get("/:id", getCourse);
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

