const mongoose = require("mongoose");

const NoteSchema = new Schema({
  Title: {
    type: String,
    default: "Your are title here"
  },
  Description: {
    type: String,
    default: "Write your notes here..."
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("notes",NoteSchema)