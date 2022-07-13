//Berikut adalah contoh cara mengakses object bersarang:
const penyimpanan ={
    meja: {
        laci: "bolpoin"
    },
    lemari: {
        "lemari atas":{
            berkas1:"mainan",
            berkas2:"rahasia"
        },
        "lemari bawah":"piring"
    }
}
console.log(penyimpanan.lemari["lemari bawah"]);


