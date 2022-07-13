//block scope di JavaScript tidak menciptakan local scope baru di dalam scope yang ditempati sekarang.
function mainKelereng() {
  // ini adalah local scope
  var kelereng = 'hijau';
  console.log(kelereng);
  if (true) { // ini adalah block scope
 var kelereng = 'biru'
  }


  console.log(kelereng);
}
mainKelereng();

