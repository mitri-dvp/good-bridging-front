export function getStrapiURL(path: string = "") {
  return (process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337") + path
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, filter: string = "") {
  const url = getStrapiURL(path)
  const res = await fetch(url + filter)
  const data = await res.json()
  return data
}