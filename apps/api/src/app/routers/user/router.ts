import { Router } from "express";
import registratioController from "./controllers/registration.controller";
import logionContoller from "./controllers/login.controller";

const router = Router();

router.route('/registration')
    .post(
        registratioController
    )

router.route('/login')
    .post(
        logionContoller
    )


export default router