// DISTRUCTURING ASSIGNMENT
// Expression pada javascript yang membuat kita dapat membongkar nilai dari array / properti dari object ke dalam variable yang terpisah

// Array
// const coba = ["satu", "dua", "tiga"];
// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);
// a, b, c adalah variable yang menampung elemen" array

// Object
// const nama = {
//   nama1: "aidil",
//   nama2: "yojes",
//   nama3: "yowie",
// };
// const { nama1, nama2, nama3} = nama;
// console.log(nama1);
// console.log(nama2);
// console.log(nama3);
// nama1, nama2, nama3 variable sebagai penampung property dari object, variable untuk menampung property harus sama dengan property object yang akan ditampung

// Array
// skipping items
// const coba = ["satu", "dua", "tiga"];
// const [a, , c] = coba;
// console.log(a);
// console.log(c);

// Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return value pada function
// function coba() {
//   return [1, 2, (a) => console.log(`halo ${a}`)];
// }

// const [a, b, c] = coba();
// // console.log(c);
// c('aidil')

// Rest prameter
// const [a, ...values] = [1, 2, 4, 5, () => console.log("hallo")];
// console.log(values[3]());

// Object
// Assigment Tanpa Deklarasi Object
// ({ nama1, nama2 } = {
//   nama1: "aidil",
//   nama2: "yojes",
// });
// console.log(nama1);
// console.log(nama2);

// Assigment ke variable baru
// const siswa = {
//   nama1: "aidil",
//   nama2: "yojes",
//   fungsi: (a) => console.log(`hallo ${a} `),
// };
// const { nama1: a, nama2: b, fungsi: c } = siswa;
// console.log(a);
// console.log(c("melisa"));

// Memberikan default value
// const siswa = {
//   nama1: "aidil",
//   nama2: "yojes",
//   fungsi: (a) => console.log(`hallo ${a} `),
// };
// const { nama1, nama2, fungsi, nama3 = "admin3" } = siswa;
// console.log(nama3);

// Memberi nilai default + assign ke variable baru
// const siswa = {
//   nama1: "aidil",
//   nama2: "yojes",
//   fungsi: (a) => console.log(`hallo ${a} `),
// };
// const { nama1: a, nama2: b, fungsi: c, nama3: d = "admin3" } = siswa;
// console.log(c());

// Rest parameter
// const siswa = {
//   nama1: "aidil",
//   nama2: "yojes",
//   fungsi: (a) => console.log(`hallo ${a} `),
// };
// const { nama1: a, ...values } = siswa;
// // console.log(values);
// console.log(values.fungsi("melisa"));

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const siswa = {
//   nama1: "aidil",
//   nama2: "yojes",
//   fungsi: (a) => console.log(`hallo ${a} `),
// };
// // tanpa membongkar object
// // function getSiswa(siswa) {
// //   return siswa.fungsi("aidil");
// // }

// // dengan membongkar object
// function getSiswa({ fungsi }) {
//   return fungsi("aidil");
// }
// getSiswa(siswa);
