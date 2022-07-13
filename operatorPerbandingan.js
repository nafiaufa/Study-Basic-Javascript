/*Operator lebih besar dari ( >) membandingkan nilai dua angka.
 Jika angka di sebelah kiri lebih besar dari angka di sebelah kanan,
  ia kembali true. Jika tidak, ia kembali false.*/

  function perbandingan(angka) {
      if (angka > 10){
          return "lebih dari 10"
      }
      return "sepuluh atau kurang dari 10"
  }
  console.log(perbandingan(10))