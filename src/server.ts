import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.json({ hello: 'test' });
});

app.listen(PORT, () => console.log(`Listening on *:${PORT}`));