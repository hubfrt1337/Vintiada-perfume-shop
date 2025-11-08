export const addToCart = async (product, quantity) => {
  try {
    if(!quantity) {
      quantity = 1;
    }
    const res = await fetch('https://vintiada-perfume-shop.onrender.com/api/cart');
    const currentCart = await res.json();

    const existing = currentCart.find(item => item.id === product.id);
    if (existing) existing.quantity = (existing.quantity || 0) + quantity;
    else currentCart.push({ ...product, quantity: quantity });

    const saveRes = await fetch('https://vintiada-perfume-shop.onrender.com/api/cart', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentCart)
    });

    if (!saveRes.ok) throw new Error('Failed to save cart');

    const updatedCart = await saveRes.json();
    return updatedCart;
  } catch (error) {
    console.error('Error updating cart:', error);
    throw error;
  }
};

export const subtractFromCart = async (product) => {
  try {
    const res = await fetch("https://vintiada-perfume-shop.onrender.com/api/cart");
    const currentCart = await res.json()

    const existing = currentCart.find(item => item.id === product.id);
    if(existing.quantity > 1) {
      existing.quantity -= 1;

      const saveRes = await fetch("https://vintiada-perfume-shop.onrender.com/api/cart", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(currentCart)
    })
    if(!saveRes.ok) throw new Error("failed to save card")
      const updatedCart = await saveRes.json();
    return updatedCart;

    }
    else if(existing.quantity === 1){
      const delRes = await fetch(`https://vintiada-perfume-shop.onrender.com/api/cart/${product.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      })
      if(!delRes.ok) throw new Error("failed to delete item")
        const updatedCart = await delRes.json()
      return updatedCart;
    }
    

    
  }
  catch(error){
    console.log("An error occured", error)
    throw error
  }
}