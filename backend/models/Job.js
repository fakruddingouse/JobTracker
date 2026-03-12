const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true
    },

    position: {
      type: String,
      required: [true, "Job position is required"],
      trim: true
    },

    status: {
      type: String,
      enum: ["Pending", "Interviewing", "Declined"],
      default: "Pending"
    },

    date: {
      type: String
    },

    link: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);