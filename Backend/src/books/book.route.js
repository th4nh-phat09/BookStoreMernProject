import express from "express";
import { postABook, getAllBooks, getABook, updateABook, deleteABook } from "./book.controller.js";

const router = express.Router();

router.post("/create-book", postABook)
router.get("/", getAllBooks)
router.get("/:id", getABook)
router.put("/edit/:id", updateABook)
router.delete("/delete/:id", deleteABook)

export default router;

