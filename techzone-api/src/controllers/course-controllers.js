import { courses } from "../models/courseModel.js";

export const getAllCourses =(req,res)=>{
   return res.status(200).json({message:"ok",courses})
};
export const getCourse=(req,res)=>{
    const id=req.params.id;

    const existingCourse=courses.find((course)=>String(course.id)===String(id));

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
export const updateCourse = (req, res) => {
    const id = req.params.id; // id recebido como string da URL
    const body = req.body;

    // Procura o curso pelo id, convertendo ambos para string para garantir a comparação
    const existingCourse = courses.find((course) => String(course.id) === String(id));

    // Se não encontrar, retorna erro 404
    if (!existingCourse) {
        return res.status(404).json({ message: "Curso não encontrado" });
    }

    // Desestrutura os campos do corpo da requisição
    const { title, description, durationInHours, level, language, isFree } = body;

    // Atualiza os campos do curso encontrado
    existingCourse.title = title;
    existingCourse.description = description;
    existingCourse.durationInHours = durationInHours;
    existingCourse.level = level;
    existingCourse.language = language;
    existingCourse.isFree = isFree;

    // Retorna o curso atualizado
    return res.status(200).json({ message: "Curso atualizado com sucesso", existingCourse });
};

export const deleteCourse=(req,res)=>{
    const id=req.params.id;
    const existingCourse=courses.find((course)=>String(course.id)===String(id));
    if(!existingCourse){
        return res.status(404).json({message:"Curso não encontrado"});
    }
    const index=courses.indexOf(existingCourse);
    courses.splice(index,1);
    return res.status(200).json({message:"Curso deletado com sucesso"});
}
