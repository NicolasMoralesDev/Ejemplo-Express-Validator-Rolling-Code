import  { Router } from "express"
import { createProduct, deleteProduct, getProducts } from "../controllers/products.controller.js";
import { check } from "express-validator";
import { validateFields } from "../midlewars/validateFields.js";




const router = Router();

router.post("/product/create",[check("id", "El id debe ser valido!").isMongoId().notEmpty(), validateFields], createProduct );

router.get("/product", getProducts);

router.delete("/product/delete/:id", deleteProduct );

export default router;