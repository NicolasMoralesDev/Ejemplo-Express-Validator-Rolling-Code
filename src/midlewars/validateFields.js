import { validationResult } from "express-validator"
import { Dto } from "../models/Dto.js";

export const validateFields = (req, res, next)=> {

    let errors = validationResult(req);

    if (!errors.isEmpty()) {

        const [error] = errors.array(); 

        const dto = new Dto();

        dto.setMsg(error.msg);

        return res.status(400).json({
            errors: dto.getMsg()
        })
    }
   
    next()

}