// CLOSURES

// Execution Context
// creation phase pada global context
// console.log(nama);
// var nama = "yojes";
// console.log(nama);

// saat program atas di jalankan ada yang disebut creation phase / fase kreasi, fase kreasi ini terjadi di konteks global
// karena kita bikinya tidak di dalam function

// yang terjadi pada fase ini, javascriptnya akan mengecek apa ada variable / function di dalam codingannya, javascript
// tidak akan mempedulikan perintahnya, kalo ada diakan membuat nama variable dan disi dengan undefined (var nama = undefined)
// kalo ada function akan diisi function itu sendiri (nama function = fn())
// konsep itu disebut dengan hoisting ( artinya mengerek ), meskipun variable dan function di tulis dibawah, ototmatis
// akan ditarik / dikerek keatas

// javascript mendifinisikan object window sebagia global object
// javascript mindefinisikan this sebagai object window
// meskipun kalian tidak menulisikan apapun, object window dan this akan tetap ada selain itu tidak ada

// execution phase
// console.log(nama);
// var nama = 'yojes';
// mengeksekusi program dengan baris perbaris dari atas ke bawah
// dimemori nama diisi undefined
// dan setelah didefinisikan / dibuat nama disi string yojes

// =====================================================================================================================================================

// var nama = 'aidil';
// var username = '@yojesstore'

// function cetakUrl(username){
//     var cetak = 'http://instagram.com/';
//     return cetak + username;
// }

// console.log(cetakUrl(username))
// intinya setiap function dipanggil membuat execution context baru, dan di tambahkan execution stack / tumpukan exekusi
// dan setelah fungsinya dijalanin, execution contextnya akan dihilangkan dari tumpukanya jadi di memori tidak ada

// var nama = "aidil";
// var username = "@yojesstore";

// function cetakUrl() {
//   console.log(arguments);
//   var cetak = "http://instagram.com/";
//   return cetak + username;
// }

// console.log(cetakUrl("@aidil"));
// jika ada argument yang tidak ditangkap saat mengirimkan, dia akan masuk ke object argument, dan data tidak hilang
// dan ini adalah scope, javascript akan menyari devinisi terdekat, kalo tidak ada naik ke atas

// function a(){
//     console.log('ini a')
//     function b(){
//             console.log('ini b')
//             function c(){
//                 console.log('ini c')
//             }
//             c()
//     }
//     b()
// }
// a()
// tumpukan eksekusi akan hilang jika seduah selesai

// console.log(Nama());

// var nama = "aidil";
// var umur = 18;

// function Nama() {
//     return `halo nama saya ${nama}, umur saya ${umur}`;
// }
// pada saat masuk menjalankan function, seolah-olah menjalankan execution context nya sendiri
// kalo ketemu function, executionnya tidak global lagi dan
// function membuat local execution context, yang didalamnya mempunyai
// creation dan execution phase
// kalo local execution context kita bisa akses window dan argument(yang isi argument, apapun yang dimasukan ke tempat parameter)
// yang didalamnya ada hoisting juga

// latihan
// function satu(){
//     var nama = 'yojes';
//     console.log(nama);
// }
// function dua(){
//     console.log(nama)
// }

// console.log(nama)
// var nama = 'aidil';
// satu()
// dua('doddy')
// console.log(nama)

// ===============================================================================================
// contoh leksikal scope

// function init() {
//   let nama = 'aidil';
//   function tampilnama() {
//    console.log(nama)
//   }
//   tampilnama();
// }
// init();
// let nama = 'aidi'; disebut local variable

//  function tampilnama(){ disebut inner function (closure), inner function memiliki akses ke parent variable

// console.log(nama);  akses ke parent variable
// ketika kasus ini terjadi inner function membutuhkan variable yang berada di parent scopenya maka inner function  ini disebut dengan closure

// untuk memastikan closure
// function init() {
//   let nama = "aidil";
//   let absen = 18;
//   function tampilnama() {
//     console.log(nama);
//     console.log(absen);
//   }
//   console.log(tampilnama);
// }
// init();
// function tampilnama tidak akan di eksekusi tapi hanya di tampilkan isinya
// jika membutuhkan data dari luar, maka akan masuk ke closure scope

// modifikasi code
// function init() {
//   let nama = "aidil";
//   function tampilnama() {
//     console.log(nama);
//   }
//   return tampilnama;
// }
// let a = init();
// a();
// jika kita mengembalikan tampilnama tanpa dijalankan, karena kita hanya menjalnkan setengah dari function tersebut / hanya menjalankan function init dan function tampilnama tidak dijalankan
// cara agar menjalankan function tampilnama, kita bisa menyimpan variable yang menampung function init, kemudian kita panggil var tersebut menjadi function
// cara itu memungkinkan kita untuk bisa melakukan function factories

// contoh function factories
// function init() {
//   function tampilNama(nama) {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let tampil = init();
// tampil("yowi");

// anonimus function / function tanpa nama
// function init() {
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let tampil = init();
// tampil("yojes_studio");
// tampil("yojes");

// function ucapsalam(salam) {
//   return function (waktu) {
//     console.log(`halo ${waktu}, selamat ${salam}`);
//   };
// }
// let pagi = ucapsalam("pagi");
// pagi("yojes");

// private menthod

// let add = function () {
//     let conter = 0;
//   return function () {
//     return ++conter;
//   };
// };

// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

// contoh berbeda
function siswa(nama, nomer, jurusan, alamat, point, rapot) {
  let siswa = {};
  (siswa.nama = nama), 
  (siswa.nomer = nomer), 
  (siswa.jurusan = jurusan),
  (siswa.alamat = alamat), 
  (siswa.point = point),
  (siswa.rapot = rapot);

  return function () {
    siswa.kasus = function (kasus) {
      this.point += kasus;
      if (this.point == 100) {
        return "maaf dengan berat hati kami telah mengeluarkan ananda dari sekolah";
      } else {
        return `tolong jangan mengulangi lagi`;
      }
    };
    siswa.kebaikan = function (kebaikan) {
      this.point -= kebaikan;
      this.rapot += kebaikan;
      return `terimakasih telah berbuat baik ${this.nama}`;
    };

    return siswa;
  };
}

let yojes = siswa("yojes", 18, "rpl", ["menggeng", "gelanglor", "sukorejo"], 0, 0);
let aidil = yojes();



