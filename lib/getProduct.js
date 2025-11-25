export default async function getProduct(_id) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/products/${_id}`);
  const data = await res.json();
  return data;
}
