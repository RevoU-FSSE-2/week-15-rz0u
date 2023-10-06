import { Router } from "express";
import { Get, Post, Put, Delete } from "../controller/method.js";

export const useRouter = Router();

useRouter.get("/method", Get);
useRouter.post("/method", Post);
useRouter.put("/method", Put);
useRouter.delete("/method", Delete);
