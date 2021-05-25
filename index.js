const express = require('express');

const app = express();

app.set('trust proxy', true);

app.use(async (req, res) => res.json({ ip: req.ip, headers: req.headers }));

app.listen(3000);
