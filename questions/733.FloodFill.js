/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image

  floodFill.fill(image, sr, sc, image[sr][sc], color)

  return image
}
floodFill.fill = (image, sr, sc, prevColor, color) => {
  if (sr < 0) return
  if (sc < 0) return
  if (sr >= image.length) return
  if (sc >= image[0].length) return
  if (image[sr][sc] !== prevColor) return

  image[sr][sc] = color
  floodFill.fill(image, sr - 1, sc, prevColor, color)
  floodFill.fill(image, sr + 1, sc, prevColor, color)
  floodFill.fill(image, sr, sc - 1, prevColor, color)
  floodFill.fill(image, sr, sc + 1, prevColor, color)
}
console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
)
