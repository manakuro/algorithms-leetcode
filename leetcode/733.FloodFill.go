package leetcode

func floodFill(image [][]int, sr int, sc int, color int) [][]int {
	if image[sr][sc] == color {
		return image
	}

	fill(&image, sr, sc, image[sr][sc], color)

	return image
}

func fill(image *[][]int, sr int, sc int, prevColor int, color int) {
	if sr < 0 {
		return
	}
	if sc < 0 {
		return
	}
	if sr >= len(*image) {
		return
	}
	if sc >= len((*image)[0]) {
		return
	}
	if (*image)[sr][sc] != prevColor {
		return
	}

	(*image)[sr][sc] = color
	fill(image, sr-1, sc, prevColor, color)
	fill(image, sr+1, sc, prevColor, color)
	fill(image, sr, sc-1, prevColor, color)
	fill(image, sr, sc+1, prevColor, color)
}
