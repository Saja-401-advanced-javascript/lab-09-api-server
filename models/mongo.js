/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable strict */
'use strict';

class Model_CRUD {
  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    if (_id) {
      return this.schema.find({ _id });
    } else {
      return this.schema.find({});
    }
  }

  create(obj) {
    let newObject = new this.schema(obj);
    return newObject.save();
  }

  update(_id, updatedObj) {
    return this.schema.findByIdAndUpdate(_id, updatedObj, { new: true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model_CRUD;