import Book from "./book.model.js";

export const postABook = async (req, res) => {
    try {
     const book = await Book({...req.body})
     await book.save()
     console.log(book)
     res.status(200).send({message: "Book created successfully", book})
     
    } catch (error) {
     console.log(error.message)
     res.status(500).send({message: error.message})
    }
 }

 export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).send({message: "Books fetched successfully", books})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
 }

 export const getABook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).send({message: "Book fetched successfully", book})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
 }  

 export const updateABook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
    res.status(200).send({message: "Book updated successfully", book})
  } catch (error) { 
    console.log(error.message)
    res.status(500).send({message: error.message})
  }  
 }

 export const deleteABook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        res.status(200).send({message: "Book deleted successfully", book})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
 }  
