import { getStrapiURL } from "./api"

// Returns the correct URL from strapi media
export function getStrapiMedia(media: any) {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}