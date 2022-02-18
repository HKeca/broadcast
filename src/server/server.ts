import express from 'express';
import path from 'path';

const app = express();
const PORT = 8000;

const assetPath = path.join(__dirname, '../dist');
app.use('/', express.static(assetPath));

app.listen(PORT, () => console.log(`Listening on *:${PORT}`));
