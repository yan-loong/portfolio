import { NextFunction, Router } from "express";
import controller from "./controllers/registration.controller";

const router = Router();

router.route('/registration')
    .post(
        controller
    )


export default router