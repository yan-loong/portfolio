import { NextFunction, Request, Response } from "express"
import { UserModel } from "../models/user.model";

async function controller(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
        await UserModel.create(body);
        res.status(200).end();
    }
    catch (error) {
        res.status(400).send(error)
    }
}

export default controller;