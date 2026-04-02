function recursion(i) {
  console.log(i);
  if (i <= 1) return; // caso base
  recursion(i - 1); // caso recursivo
}

function findKey(box) {
  for (let item in box) {
    if (box[item].type === "box") {
      //caso recursivo
      const result = findKey(box[item].content);
      if (result) return result;
    } else if (box[item].type === "key") {
      // caso base
      return `found key on item ${item}`;
    }
  }
}

export { findKey }

