import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo