const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Rutas
app.get('/', (req, res) => {
	res.send('Backend is working!');
});

// Inicia el servidor
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
