function recursion(i) {
  console.log(i);
  if (i <= 1) return; // caso base
  recursion(i - 1); // caso recursivo
}

