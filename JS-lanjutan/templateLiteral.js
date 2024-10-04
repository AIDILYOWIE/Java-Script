// TEMPLATE LITERAL

//  Multi-Line String
// console.log(`String 1
// String 2`);
// // HTML FRAGMENTS,
// let mhs = {
//   nama: "aidil",
//   nomer: 18,
//   nrp: "95860459865"
// };
// let i = `<div class="mhs">
//             <h2>${mhs.nama}</h2>
//             <span class="nrp">${mhs.nrp}</span>
//         </div>`;
// console.log(i);

// // Embedde Expression
// let nama = "melisa";
// let umur = 17;
// console.log(`halo nama saya ${nama}, saya umur ${umur}`);

// // Expression Interpolation
// let a = 20;
// let b = 5;
// console.log(`total penjumlahan ${a + b}`);

// LATIHAN
// html fragments
// const nama = {
//   nama: "Aidil Yowie",
//   umur: 17,
//   status: "Milioner",
//   pekerjaan: "Full-Stack Developer in Korea",
//   perusahaan: "Yojes Group",
// };

// const t = `<div class="nama">
//  <h3>${nama.nama}</h3
//  <h5>${nama.perusahaan}</h5>
// </div>`;

// document.body.innerHTML = t;

// Looping
// const nama = [
//   {
//     nama: "Aidil",
//     status: "Milioner",
//   },
//   {
//     nama: "melisa",
//     status: "MUA",
//   },
//   {
//     nama: "Yojes",
//     status: "Bilioner",
//   },
// ];

// const el = `<div class="nama">
// ${nama.map(
//   (m) =>
// `<ul>
//  <li>${m.nama}</li>
//  <li>${m.status}</li>
// </ul
// )}
// </div>`;
// document.body.innerHTML = el;

// Conditionals
// ternary
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Raissa",
//   feet: 'yojes'
// };
// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.feet ? `feet. ${lagu.feet}` : "No Feet"}</li>
//   </ul>
// </div>`;
// document.body.innerHTML = el;

// Nested
// HTML Fragments bersarang
// const nama = {
//   nama: "Aidil Yowie",
//   status: "Bilioner",
//   bussines: ["software house", "clothing brand", "exspor", "jual beli akun game", "farm"],
// };

// function cetakBussines(bussines) {
//   return `
//   <ol>
//     ${bussines.map((b) => `<li>${b}</li>`).join("")}
//   </ol>
//   `;
// }

// const el = `<div class="nma">
//   <h2>${nama.nama}</h2>
//   <h4>My Bussines :</h4>
//   ${cetakBussines(nama.bussines)}
// </div>`;

// document.body.innerHTML = el;