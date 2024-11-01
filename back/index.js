// import express from "express";
// import mongoose from "mongoose";
// import multer from "multer";
// import cors from "cors";
// import {
//   registerValidation,
//   loginValidation,
//   productCreateValidation,
// } from "./validation.js";
// import checkAuth from "./utils/checkAuth.js";
// import { userController, productController } from "./controllers/index.js";
// import handleValidErrors from "./utils/handleValidErrors.js";
// import quiz from "./chezee/routes/quiz.js";

// mongoose
//   .connect(
//     "mongodb+srv://admin:admin@cluster0.segol.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => console.log("DB ok "))
//   .catch((err) => console.log("DB error", err));

// const app = express();

// // const storage = multer.diskStorage({
// //   destination: (_, __, cb) => {
// //     cb(null, "uploads");
// //   },
// //   filename: (_, file, cb) => {
// //     cb(null, file.originalname);
// //   },
// // });

// // const uploads = multer({ storage });
// app.use(express.json());
// app.use(cors());

// app.use("/api", quiz);
// // app.use("/uploads", express.static("uploads"));

// // app.post(
// //   "/auth/login",
// //   loginValidation,
// //   handleValidErrors,
// //   userController.login
// // );
// // app.post(
// //   "/auth/register",
// //   registerValidation,
// //   handleValidErrors,
// //   userController.register
// // );
// // app.get("/profile", checkAuth, userController.profile);
// // app.patch("/profile", checkAuth, userController.update);
// // app.post("/uploads", checkAuth, uploads.single("image"), (req, res) => {
// //   res.json({
// //     url: `/uploads/${req.file.originalname}`,
// //   });
// // });

// // app.post("/products", productController.create);

// app.listen("3333", (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("Server ok");
// });

import cors from "cors";
import express from "express";
import connectDB from "./db.js";
import quiz from "./routes/quiz.js";
import user from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", quiz);
app.use("/api/auth", user);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);

export { app, server };
