function angka(isi){
    let pilih 
    switch(isi) {
      case 1:
      case 2:
      case 3:
        pilih = "1, 2,atau 3"
        break;
      case 4:
        pilih = "4 sendiri"
        break
      default:
        pilih = "pilih antara 1234"
    }
    return pilih
}
pilih = angka(4)
console.log(pilih)
