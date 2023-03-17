export const getMaxResolutionSourceImg = (imgArray) => {
  if (imgArray.length > 0) {
    return imgArray[imgArray.length - 1].label
  }
}
