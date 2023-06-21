import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: Date,
    },
    describe: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("News", newsSchema);
