export function getImageUrl(imageName: string) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

export function getVideoUrl(videoName: string) {
  return new URL(`../../assets/videos/${videoName}`, import.meta.url).href;
}
