let colorToType = {
  'blue': 'primary',
  'green': 'success',
  'yellow': 'warning',
  'red': 'danger',
  'gray': 'info'
}

let typeToColor = {}

for (let key in colorToType) {
  typeToColor[colorToType[key]] = colorToType[key]
}

export {
  colorToType, typeToColor
}
