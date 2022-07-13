function cetak(a){
    if(a === 0){
        return
    }
    console.log(a);
    return cetak(a - 1);
}
cetak(5)