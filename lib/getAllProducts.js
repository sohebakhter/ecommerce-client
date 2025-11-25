export async function allProducts() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/products`);
  const products = await res.json();

  return products;
}
