"use strict";
const Tweet = use("App/Models/Tweet");
const mongoose = require("mongoose");

class TweetController {
  async store({ request, response }) {
    const req = request.only(["user", "body", "likes"]);

    const tweet = new Tweet({
      _id: new mongoose.Types.ObjectId(),
      body: req.body,
      user: req.user,
      likes: req.likes
    });

    return await tweet.save();
  }

  async index({ response }) {
    return await Tweet.find({});
  }

  async unique({ request }) {
    return await Tweet.findOne({ _id: request.params.id });
  }

  async destroy({ request }) {
    const { id } = request.only(["id"]);
    console.log(id);
    return Tweet.deleteMany({ _id: id });
  }
}

module.exports = TweetController;
