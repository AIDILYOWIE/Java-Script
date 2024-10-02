// global scope / window scope
var t = 1;
// kenapa var t di anggap window scope? karena dia berada di objek window / objek paling luar browser kita


// function tes(){
//   var b = 3;
//   console.log(t);
// }

// tes();
// variable apapun yang kita buat di dalam function, variable tersebuat hanya berlaku di function itu saja
// kita tidak dapat mengakses variable di dalam scope, tetapi kita bisa mengakses variable dari dalam scope
// diluar function kita tidak bisa mengakses variable lokal, tapi jika di dalam function kita bisa mengakses variable global


// function tes(){
//     var t = 3;
//     console.log(t);
    //    console.log(window.t)
// }
// tes();
// ini karena var t di dalam function, adalah var lokal
// jika kita memanggil variable di dalam function, itu sudah mengacu ke variable lokal
// jadi kita tidak bisa mengakses variable global, jika ingin kita bisa menggunakan window.NamaVariableGlobal


// function tes(){
//     var t = 3;
// }
// tes();
// console.log(t);
// ini disebut name conflict, dimana kita mempunyai dua variable tapi scopenya berbeda
// jadi var t global tidak menimpa
// var t yang di dalam function itu berbeda dengan var t di luar function
// contoh
        // var t = 3;
        // var t = 5;
// yang bakal tampil adalah 5, jadi 3 tertimpa


// function tes(){
//     t = 3;
// }
// tes();
// console.log(t);
// jika didalam function terdapat var tapi didepanya tidak ada varnya, variable tersebut akan menjadi global
// jika variable global di hapus, dan di dalam function tersebut ada variable yang di depanya tidak ada var maka variable tersebut menjadi global
// tapi jika di dalam function tersebut ada deklarasi variable, maka variable tersebut menjadi lokal


// var a = 1;
// "use strict";

// function pee(){
//     a = 4;
// }
// pee();

// console.log(a);
// "use strict", untuk menjadikan variable di dalam function yang sebelumnya global menjadi local



function tes(t){
    console.log(t);
}

tes(3);
console.log(t);
// angka 3 adalah argumen yang dikirimkan ke parameter dan ditampilkan di dalam function
// angka 1 adalah variable global yang isinya 1