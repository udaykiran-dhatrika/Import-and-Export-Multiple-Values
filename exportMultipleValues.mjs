export let myArray = ["camel", 265, true, "5.6"];
export let bulb = {
  watts: 10,
  type: "LED",
};

let number = 4;
export function multiplyByFour(num) {
  return 4 * num;
}

const multiplyByFour = (num) => {
  return 4 * num;
};

module.exports = multiplyByFour;
