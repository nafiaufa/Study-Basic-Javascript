var hitungMundur = []
for (var i = 5; i > 0; i--) {
    hitungMundur.push(i)
}
console.log(hitungMundur)

var hitungMundur2 = []
for(var i = 1;i <= 5; i++) {
    hitungMundur2.unshift(i)
}
console.log(hitungMundur2)


function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countup(5));



