import { model, Schema } from "mongoose";

const questionSchema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const cardSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const quizSchema = new Schema({
  title: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  cards: { type: [cardSchema], required: true },
});

const Quiz = model("Quiz", quizSchema);

export default Quiz;
