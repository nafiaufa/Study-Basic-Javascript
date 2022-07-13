function hitung(a, b){
    if(a < b){
        return a
    }
    else {
        return b
}
}


let hitung2 = (a, b) => a < b ? a : b
console.log(hitung2(9, 2))