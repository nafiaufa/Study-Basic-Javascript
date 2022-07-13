//Berikut adalah contoh cara mengakses array bersarang:
const kucing = [
    {
        tipeHewan: 'kucing',
        nama: ['annabel', 'mongi','kitkat']
    },
    {
        tipeHewan: 'Anjing',
        nama: ['Chiko', 'Scooby-doo','Rocky']
    }
]
console.log(kucing[1].nama[2])
