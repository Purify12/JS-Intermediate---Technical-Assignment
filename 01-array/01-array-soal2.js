// Soal 02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  let avr = total / arr.length;
  let j = 0;
  let c = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > avr) {
      c.push(arr[j]);
    }
  }
  return c;
}

console.log(
  "Terdapat " + getAverage(arr1).length + " bilangan yang melebihi rata-rata array 1 yaitu " + getAverage(arr1)
);
console.log(
  "Terdapat " + getAverage(arr2).length + " bilangan yang melebihi rata-rata array 2 yaitu " + getAverage(arr2)
);