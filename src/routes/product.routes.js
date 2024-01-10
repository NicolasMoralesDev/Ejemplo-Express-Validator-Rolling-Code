import  { Router } from "express"
import { createProduct, deleteProduct, getProducts } from "../controllers/products.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../midlewares/validarCampos.js";



const router = Router();

router.post("/product/create",[check("password", "error"), validarCampos], createProduct );

router.get("/product/edit", getProducts);

router.delete("/product/delete/:id", deleteProduct );

export default router;