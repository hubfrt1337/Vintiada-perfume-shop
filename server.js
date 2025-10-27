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
app.delete("/api/cart/:id", async (req, res) => {
  try {
   const id = parseInt(req.params.id)  ;
   if (Number.isNaN(id)) return res.status(400).json({error: "Invalid Id"})
  
  const raw = await fs.readFile(CART_PATH, 'utf8')
  const cart = raw ? JSON.parse(raw) : [];
  
  const index = cart.findIndex(item => item.id === id)
  if(index === -1) return res.status(404).json({error: "Item not found"})

    cart.splice(index, 1)

    await fs.writeFile(CART_PATH, JSON.stringify(cart, null, 2), "utf8" )
    return res.json(cart)
  }
  catch (err) {
    console.log("Error deleting cart item:", err)
    res.status(500).json({error: 'Cannot delete card'})
  }
})

app.listen(3001, () => console.log('API server listening on http://localhost:3001'));