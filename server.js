const express = require('express');
const app = express();
const cursoRoutes = require('./routes/cursoRoutes');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/cursos', cursoRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));