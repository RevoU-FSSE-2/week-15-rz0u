import { Router } from "express";
import { xss, clickjacking } from "../controller/security.js";

export const securityRouter = Router();

securityRouter.get("/xss", xss);
securityRouter.post("/clickjacking", clickjacking);
