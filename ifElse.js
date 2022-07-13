//if pernyataan digunakan untuk membuat keputusan dalam kode

function kondisi(num) {
  if (num > 15){
    return "lebih besar dari 15"
  }else if (num < 5){
    return "lebih kecil dari 5"
  }else {
    return "di antara 5 dan 15"
  }
}
console.log(kondisi(10))