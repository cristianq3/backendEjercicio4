require("dotenv").config();
require("./database");
const app = require("./app");

async function main() {
  await app.listen(4000); // iniciar un servidor en el puerto 4000
  console.log("server on port 4000");
}
main();
