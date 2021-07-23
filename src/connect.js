const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://vipsuper9x:An123456@cluster0.6zgiz.mongodb.net/chatbox", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
