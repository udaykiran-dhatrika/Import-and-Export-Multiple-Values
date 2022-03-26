export let myArray = ["camel", 265, true, "5.6"];
export let bulb = {
  watts: 10,
  type: "LED",
};



// with out this(let number = 4;) also we got the output
// function declaration
export function multiplyByFour(num) {
  return 4 * num;
}



// function expression
export const multiplyByFour = function (num) {
  return num * 4;
};



// arrow function
export const multiplyByFour = (num) => {
  return 4 * num;
};
// we already exported while defining in the above line 25
export { multiplyByFour };
