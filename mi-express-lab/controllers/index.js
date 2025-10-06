cat > index.js <<'EOF'
const express = require('express');
const app = express();
const port = 3000;

// Para leer JSON en el body
app.use(express.json());

// Importar controlador
const itemsController = require('./controllers/itemsController');

// Rutas
app.get('/', itemsController.getHome);
app.get('/items', itemsController.getItems);
app.get('/items/:id', itemsController.getItemById);
app.post('/items', itemsController.createItem);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
EOF
