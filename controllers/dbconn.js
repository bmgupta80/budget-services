const PocketBase = require("pocketbase/cjs");

const dbconnection = () => {
  const pb = new PocketBase("http://mahesh-server:9002");
  return pb;
};

module.exports = { dbconnection };
