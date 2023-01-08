import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: String,
  taskId: Number,
  isCompleted: Boolean,
});

export default mongoose.model("Task", TaskSchema);
