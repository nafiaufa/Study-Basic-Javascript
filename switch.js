//Jika Anda memiliki banyak opsi untuk dipilih, gunakan pernyataan sakelar .
//case nilai diuji dengan kesetaraan yang ketat ( ===)
//Jika breakdihilangkan, pernyataan berikutnya akan dieksekusi

function ganti(isi){
  switch(isi ){
    case "a":
      console.log("selamat anda beruntung")
      break;
    case "b":
      console.log("selamat anda gagal")
      break;
    case "c":
      console.log("coba lagi")
      break;
    default:
      console.log("anda belum mengisi")
      break;
  }
}
ganti("")