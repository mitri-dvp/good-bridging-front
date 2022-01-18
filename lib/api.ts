let JWT: any = null;

export function getStrapiURL(path: string = "") {
  return (process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337") + path
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  if(JWT === null) await loginStrapi();
  const url = getStrapiURL(path)
  const res = await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + JWT,
    }
  })
  const data = await res.json()
  return data
}

async function loginStrapi() {
  const url = getStrapiURL("/auth/local")
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      identifier: process.env.NEXT_PUBLIC_STRAPI_API_IDENTIFIER,
      password: process.env.NEXT_PUBLIC_STRAPI_API_PASSWORD,
    })
  })
  const data = await res.json()

  JWT = data.jwt
}