export const getImageUrl = (path) => {
    // It is taking the relative path which we pass to it, it is taking the base url of our websiteappending the relative path on to it and passing it back. This makes easier or us to dynamically import images into our different components.
    return new URL(`/assets/${path}`, import.meta.url).href; 
}