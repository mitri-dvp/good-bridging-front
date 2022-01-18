import { getStrapiURL } from "./api"

// Returns the correct URL from strapi media
export function getStrapiMedia(media: any) {
  if(media === null) {
    console.log('WARNING A media is null')
    return ''
  }
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}