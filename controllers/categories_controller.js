const { dbconnection } = require("./dbconn");

async function getCategories() {
  const conn = dbconnection();
  const categories = await conn
    .collection("categories")
    .getFullList({ sort: "-created" }, { fields: "id,name" });
  return categories;
}

module.exports = { getCategories };
