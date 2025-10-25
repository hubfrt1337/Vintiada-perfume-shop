import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const CART_PATH = join(__dirname, 'public', 'cart.json');

app.get('/api/cart', async (req, res) => {
  try {
    const raw = await fs.readFile(CART_PATH, 'utf8');
    res.json(JSON.parse(raw));
  } catch (err) {
    res.status(500).json({ error: 'Cannot read cart' });
  }
});

app.put('/api/cart', async (req, res) => {
  try {
    const newCart = req.body;
    await fs.writeFile(CART_PATH, JSON.stringify(newCart, null, 2), 'utf8');
    res.json(newCart); // zwracamy zaktualizowany koszyk
  } catch (err) {
    res.status(500).json({ error: 'Cannot write cart' });
  }
});

app.listen(3001, () => console.log('API server listening on http://localhost:3001'));