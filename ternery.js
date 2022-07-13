// // Operator kondisional , juga disebut operator ternary , dapat digunakan sebagai ekspresi if-else satu baris.
// Sintaksnya adalah a ? b : c, di mana akondisinya, badalah kode yang dijalankan saat kondisi kembali true, dan ckode yang dijalankan saat kondisi kembali false.

function contoh(a, b) {
    if(a > b) {
      return "a lebih besar";
    }
    else {
      return "b lebih besar";
    }
  }
  console.log(contoh(5, 10))

function contoh2(a, b) {
  return a > b ? "a lebih besar" : "b lebih besar";
}
console.log(contoh2(5, 10))
