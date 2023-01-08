import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PhaseSchema = new Schema({
  name: String,
  isCompleted: Boolean,
  isLocked: Boolean,
});

export default mongoose.model("Phase", PhaseSchema);
