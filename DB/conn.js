const mongoose = require("mongoose");

const pwd = process.env.PASSWORD;
const url = `mongodb+srv://namanv08:${pwd}@cluster0.fvdysms.mongodb.net/users?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then(() => console.log(`Connection with database successful`))
  .catch((error) => console.log(error));
