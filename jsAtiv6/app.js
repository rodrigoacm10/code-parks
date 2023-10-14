const mysql = require("mysql2");

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  user: "seu_usuario",
});

// Abrir a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados.");
});
