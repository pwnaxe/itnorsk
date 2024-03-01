async function submitOrder(cart) {
  try {
      const response = await fetch('/api/orders', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart }),
      });
      
      const data = await response.json();
      console.log('Order response:', data);
  } catch (error) {
      console.error('Failed to submit order:', error);
  }
}