function sumArrayElements(array) {
  if (array.length === 0) return 0; //caso base
  if (array.length === 1) return array[0]; // caso base
  const middle = Math.floor(array.length / 2); // dividir (quebrar ao meio)
  return (
    sumArrayElements(array.slice(0, middle)) +
    sumArrayElements(array.slice(middle))
  );
}



export { sumArrayElements }