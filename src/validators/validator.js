const mongoose = require('mongoose')

// Validation checking function

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false //it checks whether the value is null or undefined.
    if (typeof value === 'string' && value.trim().length === 0) return false //it checks whether the string contain only space or not 
    if (typeof value === 'number' && value.toString().trim().length === 0) return false
    return true;
};
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0; // it checks, is there any key is available or not in request body
};

const isValidTitle = function (title) {
    return ['Mr', 'Mrs', 'Miss'].indexOf(title) !== -1
}

const validString = function (value) {
    if (typeof value === 'string' && value.trim().length === 0) return false //it checks whether the string contain only space or not 
    return true;
}
const validAddress = function (address) {
    if (typeof address === 'undefined' || address === null) return false //it checks whether the value is null or undefined.
    if (Object.keys(address).length === 0) return false
    return true;
}
const validRating = function isInteger(value) {
    return value % 1 == 0;
}
const verifyReviewerName = function (value) {
    if (typeof value === 'number') return false
    return true
}

module.exports = {
    isValid,
    isValidRequestBody,
    isValidTitle,
    isValidObjectId,
    validString,
    validAddress,
    validRating,
    verifyReviewerName
}

