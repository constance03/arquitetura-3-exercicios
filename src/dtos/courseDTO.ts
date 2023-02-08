import { BadRequestError } from "../errors/BadRequestError"
import { CourseInputDTO, CourseOutputDTO, EditCourseInputDTO, EditCourseOutputDTO } from "../interfaces/types"
import { Course } from "../models/Course"


export class CourseDTO {
    //atributos

    //metodos
    //metodo de input
    createCourseInputDTO(id: unknown, name: unknown, lessons: unknown) : CourseInputDTO {

        //validacao que nao aceita dados e dera um erro especifico
        if (typeof id !== "string") {
            throw new BadRequestError("'id' deve ser string")
        }

        if (typeof name !== "string") {
            throw new BadRequestError("'name' deve ser string")
        }

        if (typeof lessons !== "number") {
            throw new BadRequestError("'lessons' deve ser number")
        }

        const dto: CourseInputDTO = {
            id, 
            name, 
            lessons
        }

        return dto
    }

    //metodo de output
    createCourseOutputDTO(course: Course): CourseOutputDTO {
        //verificacao de tipagem
        //organizar os dados de forma correta
        const dto: CourseOutputDTO = {
            message: "Curso registrado com sucesso",
            course: {
                id: course.getId(),
                name: course.getName(),
                lessons: course.getLessons()
            }
        }
        return dto
    }

    editCourseInput(idToEdit: string, newId: unknown, newName: unknown, newLessons: unknown) : EditCourseInputDTO {
        if (newId !== undefined) {
            if (typeof newId !== "string") {
                throw new BadRequestError("'id' deve ser string")
            }
        }
        
        if (newName !== undefined) {
            if (typeof newName !== "string") {
                throw new BadRequestError("'name' deve ser string")
            }
        }
        
        if (newLessons !== undefined) {
            if (typeof newLessons !== "number") {
                throw new BadRequestError("'lessons' deve ser number")
            }
        }

        const dto: EditCourseInputDTO = {
            idToEdit, 
            newId, 
            newName, 
            newLessons
        }

        return dto
    }

    editCourseOutputDTO(course: Course): EditCourseOutputDTO {
        const dto: EditCourseOutputDTO = {
            message: "Curso editado com sucesso",
            course: {
                id: course.getId(),
                name: course.getName(),
                lessons: course.getLessons()
            }
        }
        return dto
    }
}