const selectColor = (colorNum: number, colors: number) => {
  if (colors < 1) colors = 1
  return 'hsl(' + ((colorNum * (360 / colors)) % 360) + ',70%,30%)'
}

export default selectColor
