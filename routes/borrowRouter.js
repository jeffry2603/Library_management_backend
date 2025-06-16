import express from "express";
import {
  borrowedBooks,
  getBorrowedBooksForAdmin,
  recordBorrowedBook,
  returnBorrowBook,
  borrowBook,
} from "../controllers/borrowControllers.js";
import {
  isAuthenticated,
  isAuthorized,
} from "../middlewares/authMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

const router = express.Router();

router.post(
  "/record-borrow-book/:id",
  isAuthenticated,
  isAuthorized("Admin"),
  catchAsyncErrors(recordBorrowedBook)
);

router.post(
  "/borrow-book/:id",
  isAuthenticated,
  catchAsyncErrors(borrowBook)
);

router.get(
  "/borrowed-books-by-users",
  isAuthenticated,
  isAuthorized("Admin"),
  catchAsyncErrors(getBorrowedBooksForAdmin)
);

router.get(
  "/my-borrowed-books",
  isAuthenticated,
  catchAsyncErrors(borrowedBooks)
);

router.put(
  "/return-borrowed-book/:bookId",
  isAuthenticated,
  isAuthorized("Admin"),
  catchAsyncErrors(returnBorrowBook)
);

export default router;
