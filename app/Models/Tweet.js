"use strict";
const mongoose = require("mongoose");
const BaseModel = use("MongooseModel");

/**
 * @class Tweet
 */
class Tweet extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'TweetHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Tweet's schema
   */
  static get schema() {
    return {
      _id: String,
      body: String,
      likes: [],
      user: String
    };
  }

  static get primaryKey() {
    return "_id";
  }
}

module.exports = Tweet.buildModel("Tweet");
