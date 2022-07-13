// Set  merupakan kumpulan nilai (set of values).
// yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan & tdk di index
// Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.

const numberSet = new Set([1, 4, 6, 4, 1]);
// Fungsi add() hanya menerima satu argumen.
numberSet.add(7);
numberSet.add(8);
console.log(numberSet);
numberSet.delete(4);
(console.log(numberSet))