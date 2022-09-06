const mongoose = require("mongoose");
const Schema = mongose.Schema;

const favoriteSchema = mongoose.Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    movieId: {
      type: toString,
    },
    movieTitle: {
      type: String,
    },
    moviePost: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  { timestapms: true }
);

const Favorite = mongoose.model("Favorite", userSchema);

module.exports = { Favorite };
