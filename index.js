
import express from "express";
import morgan from "morgan";

import productRoute from "./src/routes/product.routes.js";
import userRoute from "./src/routes/user.routes.js";

const app = express();
app.listen(3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(productRoute);
app.use(userRoute),

console.log(`Server on port ${3000}`);