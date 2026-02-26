const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API backend en marche 🚀');
});

// Export pour Vercel (@vercel/node)
module.exports = app;

// Lancement en local (nodemon / node index.js)
if (process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Serveur backend démarré sur le port ${PORT}`);
  });
}

