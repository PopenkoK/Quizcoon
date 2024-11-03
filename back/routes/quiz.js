import { Router } from "express";
import Quiz from "../models/quiz.js";

const router = Router();

router.get("/quizzes", async (req, res) => {
  try {
    const quizzes = await Quiz.find({}, "title");
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
