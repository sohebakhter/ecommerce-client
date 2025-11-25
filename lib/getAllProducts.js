export async function allProducts() {
  const res = await fetch(`https://next-server-nu.vercel.app/products`);
  const products = await res.json();

  return products;
}
