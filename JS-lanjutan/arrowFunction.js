// function expresion
// const jenisnama = function (nama) {
//   alert(`halo ${nama}`)
// }
//  jenisnama('tarisa dwi')

// arrow function 1 parameter
const jenisnama = (nama) => {
  console.log(`halo ${nama}`);
};

jenisnama("yojes");

// arrow function dengan lebih dari 1 parameter
// const jenisnama = (nama, waktu, kegiatan) => {
//   alert(`halo ${nama}, selamat ${waktu}, hari ini aku ${kegiatan}`)
// }

// jenisnama('yojes', 'malam', 'ngoding')

// jika parameter 1 kita tida perlu menggunakan kurung
// tapi jika parameter lebih dari 1 harus menggunakan kurung
// const jenisnama = (nama) => {
//   console.log(`halo ${nama}`);
// };

// jenisnama("yojes");

// implisit return
// jika isi dari function hanya return saja, kita tida perlu menuliskan return dan kurung kurawal
// const gabut = nama => `${nama} otw meliarder`;
// console.log(gabut('aidil'))

// jika tida ada prameter wajib menuliskan kurung
// const gabut = () => `aidil otw meliarder`;
// console.log(gabut())

// menggunakan function expesion
// let data = ["aidil", "yowie", "yojesstore"];

// let Datanama = data.map(function (nama) {
//   return nama.length
// })

// console.log(Datanama)

// arrow function
// let Datanama = data.map(nama => nama.length)

// console.log(Datanama)

// dengan menggunakan object
// jika kalian ingin mengembalikan object yang propetynya sama dengan nilainya cukup tulis satu saja
// let Datanama = data.map((nama) => ({
//   // nama: nama,
//   nama,
//   jmlhnama: nama.length,
// }));

// console.table(Datanama);
