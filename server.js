const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({"available":true});
});

// Route générique pour toutes les méthodes et chemins
app.all('*', (req, res) => {    
    if (req.body.parrot_response) {
        res.json(req.body.parrot_response);
    }else{
        res.json(req.body);
    }
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});