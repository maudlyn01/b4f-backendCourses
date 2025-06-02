import { courses } from "../models/courseModel.js";

export const getAllCourses =(req,res)=>{
   return res.status(200).json({message:"ok",courses})
};
export const getCourse=(req,res)=>{
    const id=req.params.id;

    const existingCourse=courses.find((course)=>course.id===String(id));

    if(!existingCourse){
       return res.json({message:"Curso não encontrado"});
    }
  return  res.status(200).json({message:"ok",existingCourse});
};

export const createCourse=(req,res)=>{
    const body =req.body;
    const {title,description,durationInHours,level,language,isFree}=body;

   const coursesLength = courses.length;

   const course={
    id:coursesLength +1,
    title,
    description,
    durationInHours,
    level,
    language,
    isFree,
   };
   
   courses.push(course);
    return  res.status(201).json({message:"Curso adicionado com sucesso"});

};

