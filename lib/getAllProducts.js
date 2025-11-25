export async function allProducts() {
  const res = await fetch(`https://next-server-nu.vercel.app/products`, {
    cache: "no-store",
  });
  const products = await res.json();

  return products;
}
