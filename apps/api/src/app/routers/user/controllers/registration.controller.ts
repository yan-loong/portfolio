import { NextFunction, Request, Response } from "express"

function controller(req: Request, res: Response, next: NextFunction) {
    res.send({ t: req.body })
}

export default controller;