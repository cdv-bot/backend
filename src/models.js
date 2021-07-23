const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productNu = new Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    message: String
});
module.exports = mongoose.model("Rooms", productNu);
