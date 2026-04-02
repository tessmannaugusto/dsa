function recursion(i) {
  console.log(i);
  if (i <= 1) return; // caso base
  recursion(i - 1); // caso recursivo
}

const box1 = {
  a: {
    type: "box",
    content: {
      aa: { type: "box", content: {} },
      ab: { type: "box", content: {} },
    },
  },
  b: { type: "box", content: {} },
  c: { type: "box", content: { ca: { type: "key" } } },
};

function findKey(box) {
  for (let item in box) {
    console.log(item);
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

console.log(findKey(box1));
