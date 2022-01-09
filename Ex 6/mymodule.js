var fs = require("fs");
var path = require("path");

module.exports = (dir, filter, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    } else {
      list.forEach((e) => {
        if (path.extname(e) === "." + filter) {
          return callback(null, e);
        }
      });
    }
  });
};
