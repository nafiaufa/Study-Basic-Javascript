//Boolean hanya boleh salah satu dari dua nilai: true atau false
function kodisi(ketika){
    if(ketika){
        return "benar"
    }
    return "salah"
}
console.log(kodisi(true))
console.log(kodisi(false))
/*Ketika kondisi bernilai true, program mengeksekusi pernyataan di dalam kurung kurawal.
 Ketika kondisi Boolean bernilai false,
 pernyataan di dalam kurung kurawal tidak akan dieksekusi.*/