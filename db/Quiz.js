const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  questionID: {
    type: Number,
  },
  questionString: {
    type: String,
  },
  choices: {
    type: Array,
  },
  rightChoice: {
    type: String,
  },
});

module.exports = Quiz = mongoose.model("quizCollection", quizSchema);
