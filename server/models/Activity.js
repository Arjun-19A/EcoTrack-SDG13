import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    transport: {
      type: Number,
      required: true,
    },

    electricity: {
      type: Number,
      required: true,
    },

    waste: {
      type: Number,
      required: true,
    },

    carbonFootprint: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
