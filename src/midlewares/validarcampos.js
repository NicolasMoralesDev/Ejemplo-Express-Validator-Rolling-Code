import { validationResult } from "express-validator";




export const validarCampos = (req, res, next ) => {

    let error = validationResult(req);

    if (!error.isEmpty()) {
        console.log(error.array());

        let [array ]= error.array();

        return res.status(400).json({errors: { msg : array.msg}})
    }

    next();

}

