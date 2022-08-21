let inputs = ["1", 2, 3, 5, 4, 8, 9, 6];
console.log(inputs);

const numberFilter = (array) => {
  return array.every((x) => /[0-9]/.test(x));
};

if (numberFilter(inputs)) {
  console.log("numeros");
} else {
  console.log("caracteres");
}
