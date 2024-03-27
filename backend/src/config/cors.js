module.exports = () => {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  
  // Habilitar o CORS para todas as origens (isso pode ser ajustado conforme necessário)
  app.use(cors());
  
  // Resto da sua configuração do servidor
  // ...
  
  app.listen(3003, () => {
    console.log('Servidor em execução na porta 27017');
  });
  
}
