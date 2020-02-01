'use strict';

class Model_CRUD {

    /**
     * Model constructor
     * @param {object} schema 
     */
    constructor(schema) {
        this.schema
    }

    /**
     * read one or more records
     * @param {string} id 
     * @returns {Array}
     */
    get(id) {
        if (id) {
            return this.schema.find(id)
        } else {
            return this.schema.find({})
        }
    }

    /**
     * save a record to the data base
     * @param {object} obj 
     * @returns {object}
     */
    create(obj) {
        let newObject = new this.schema(obj)
        return newObject.save()
    }

    /**
     * update a record based on its id
     * @param {string} id 
     * @param {object} updatedObj 
     * @returns {object}
     */
    update(id, updatedObj) {
        return this.schema.findByIdAndUpdate(id, updatedObj)
    }

    /**
     * 
     * @param {string} id 
     * @returns {object}
     */
    delete(id) {
        return this.schema.findByIdAndDelete(id)
    }
}

module.exports = Model_CRUD;