const fs = require("fs");
const path = require("path");

var file = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(file, (err, data) => {
  if (err) return console.error(err);
  data.forEach((e) => (path.extname(e) === ext ? console.log(e) : null));
});
