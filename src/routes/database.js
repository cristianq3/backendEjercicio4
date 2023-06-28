const mongoose = require("mongoose");
console.log("proccess.env.MONGODB");
const url = process.env.MONGODB_URL; // creo una bd mernstack usando primero protocolo db: direccion de la bd

mongoose.connect(url, {
  userNewUrlParser: true,
  useCreateIndex: true,
}); // Este modulo permite conectarme a una instancia de mongodb

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("BS CONECTADA");
}); //una vez que se conecte a la b d que muestre el mje
