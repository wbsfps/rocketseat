function sum(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) total += rest[i];

  return total;
}

function multiply(...rest) {
  let total = 1;
  for (let i = 0; i < rest.length; i++) total *= rest[i];

  return total;
}

export { sum as sumTwoNumbers, multiply as multiplyTwoNumbers };
