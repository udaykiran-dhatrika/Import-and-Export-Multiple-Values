export let myArray = ["camel", 265, true, "5.6"];
export let bulb = {
  watts: 10,
  type: "LED",
};

// with out this(let number = 4;) also we got the output
// export function multiplyByFour(num) {
//   return 4 * num;
// }

const multiplyByFour = (num) => {
  return 4 * num;
};

export { multiplyByFour };
