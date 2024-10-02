// // HIRE ORDER FUNCTION
// // function disimpan di argumen
// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`mulai mengerjakan tugas ${matakuliah}`)
//     selesai()
// }

// function selesai(){
//     alert(`selesai mengerjakan`)
// }

// kerjakanTugas('web developer', selesai)
// // function kerjakanTugas bisa disebut sebagai hire order function
// // dan function selesai yang disimpan sebagai argument disebut dengan callback

// // contoh lain hire order function

// setTimeout(function() {
//     console.log('halo tarisa ku')
// }, 1000)
// // setTimeout disebut hire order function
// // dan function disebut dengan callback

// const tombol = document.querySelector('.tombol')

// tombol.addEventListener('click', function(){
//     console.log('jangan di pencet')
// })

// function salam(waktu) {
//     return function(nama){
//         console.log(`halo ${nama}, selamat ${waktu}, semoga herimu menyenangkan`)
//     }
// }

// let Malam = salam('malam')
//  console.log(Malam('tarisa'))
// //  function salam dissebut hire order function karena memiliki return value

// // abstraksi
// function repeatLog(n) {
//     for(let i = 0; i < n; i++){
//         console.log(i)
//     }
// }

// membuat lebih efektif
// function repeat(n, action) {
//   for (let a = 0; a < n; a++) {
//     action(a);
//   }
// }
// repeat(10, console.log);
// repeat(10, alert);

// const a = parseInt(prompt("masukan angka a"));
// const b = parseInt(prompt("masukan angka b"));
// const p = prompt("pilih kali / tambah");

// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// function tampil(tambah, kali) {
//   console.log(tambah);
// }

// tampil(p(a, b), p(a, b));

// FILTER, MAP, REDUCE

const angka = [1, 4, 6, 8, -1, 10, -5, 9, 3];

// mencari angka
//menggunakan for
// const bisa mengisi array
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// Filter
const newAngka = angka.filter(function (a) {
  return a >= 3;
});
console.log(newAngka);

// dengan arrow function
// const newAngka = angka.filter((a) => a >=3);
// console.log(angka);
// console.log(newAngka);

// filter digunakan untuk mengfilter, jika kita mau mencari angka yang lebih kecil dari angka 3, kita bisa menggunakan filter
// a digunakan untuk menulusuri array, seperti menggunakan for
// membuat array baru

// Map

// const newAngka = angka.map((a) => {
//   return a >= 3;
// });
// console.log(angka);
// console.log(newAngka);

// map digunakan untuk mempetakan semua elemen pada array dengan sebuah fungsi yang baru
// map jika tidak mengubah isi dari array angka

// Reduce
//0 -1 + 4 + 6 + 8 + -1 + 10 + -5 + 9 + 3

// const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 10);
// console.log(angka);
// console.log(newAngka);

// Reduce digunakan untuk melakukan sesuatu terhadap seluruh elemen pada array
// reduce mempunyai dua argument yaitu accumulator dan currentvalue
// accumulator adalah hasil dari prosesnya
// currentvalue adalah elemen yang di looping
// secara default ada angka di belakang ',', itu adalah nilai awal sebelum dijumlahkan, nilai awal juka bisa di ubah

// Method Chaining

// const hasil = angka
//   .filter((a) => a >= 3)
//   .map((a) => a * 1)
//   .reduce((acc, curr) => acc + curr);
// console.log(hasil);

// digunakan untuk menggabungkan fungsi fungsi pada hire order function hanya satu kali eksekusi tanpa harus menyimpan pada variable

const bahan = [
  ["wortel", "kubis", "bayem"],
  ["daging", "kecap", "saos", "minyak"],
];

const sayur = bahan
  .filter((a) => a == bahan[0])
  .filter((a) => a.push(" timun"))
  .filter((a) => a.push("melisa"))
  .reduce((a, b) => a + b);

const bukanSayur = bahan.filter((a) => a == bahan[1]).reduce((a, b) => a + b);
console.log(sayur);
console.log(bukanSayur);
