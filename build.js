var stealTools = require("steal-tools");

var promise = stealTools.build({
  config: __dirname+"/package.json!npm"
},{
  // the following are the default values, so you don't need
  // to write them.
  minify: false,
  debug: true
});