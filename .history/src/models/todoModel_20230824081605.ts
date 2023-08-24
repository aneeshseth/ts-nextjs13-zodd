import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Todo = mongoose.model('Todo', todoSchema);

