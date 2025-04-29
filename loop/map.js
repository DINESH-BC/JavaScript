const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNums
                    .map((num) => num * num)
                    .map((result) => result +10)
                    .map((re) => re / 2)
                    .filter((num) => num > 10 && num < 20)

console.log(newNumber);
