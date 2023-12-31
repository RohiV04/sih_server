const mongoose = require("mongoose");
const doc_to_translateSchema = new mongoose.Schema(
  {
    fileUrl: {
      type: String,
      required: true,
    },
    extracted: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    translated: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // enable automatic timestamp fields
  }
);
const Text = mongoose.model("Text", doc_to_translateSchema);
module.exports = Text;
