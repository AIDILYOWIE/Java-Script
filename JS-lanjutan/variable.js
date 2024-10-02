// console.log(t);
// var t = 10;
// jika kita menggunakan var maka akan muncul undefined
// console.log(i);
// let i = 10;
// console.log(b);
// const b = 10;
// tetapi jika kita menggunakan let / const akan terjadi eror

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);
// Dijavascript memungkin kita untuk mengakses variable yang di dalam block program ( {} )
// di dalam pemograman lain itu eror
// karena java script menganut function scope bukan block scope

// cara mengatasinya dengan menggunakan function / let
// dengan function scope
// function tes() {
//   for (var i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// tes();
// console.log(i);

// contoh IIFE
// let x = function() {

// }

// contoh SIAF
(function () {
  for (var i = 1; i < 10; i++) {
    console.log(i);
  }
})();
console.log(i);
