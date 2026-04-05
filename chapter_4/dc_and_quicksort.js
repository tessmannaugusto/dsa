function sumArrayElements(array) {
  if (array.length === 0) return 0; //caso base
  if (array.length === 1) return array[0]; // caso base
  const middle = Math.floor(array.length / 2); // dividir (quebrar ao meio)
  return (
    sumArrayElements(array.slice(0, middle)) +
    sumArrayElements(array.slice(middle))
  );
}

function getBiggestEqualSquareSubtraction (width, height) { // implementação mais eficiente com módulo e inversão de width por height pra cobrir alteração de maior e menor
  if (width === height) return width;
  if (width < height) {
    return getBiggestEqualSquareSubtraction(width, height - width)
  } else {
    return getBiggestEqualSquareSubtraction(width - height, height)
  }
}

function getBiggestEqualSquareModule (width, height) { // implementação mais eficiente com módulo e inversão de width por height pra cobrir alteração de maior e menor
  if (height === 0) return width;
  console.log(`width: ${width} X height: ${height}`)
  return getBiggestEqualSquareModule(height, width % height)
}



export { sumArrayElements, getBiggestEqualSquareModule, getBiggestEqualSquareSubtraction }