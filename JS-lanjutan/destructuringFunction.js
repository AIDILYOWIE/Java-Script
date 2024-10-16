// Destructuring function

// Destructuring pada return
// function hitung(a, b) {
//   return [a + b, a * b, a - b, a / b];
// }
// const [tambah, kali, kurang, bagi, modulus = "tidak ada"] = hitung(10, 4);
// console.log(tambah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);
// console.log(modulus);
// ketika return valuenya berupa array, urutanya harus benar
// tapi kita menggunakan object urutan tidak harus benar
// function hitung(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// const { kali, bagi, tambah, kurang, modulus = "tidak ada" } = hitung(10, 4);
// console.log(tambah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);
// console.log(modulus);

// Distructuring pada function argument
const siswa = {
  nama: "Aidil Yowie",
  umur: 17,
  kelas: "XI RPL B",
  jurusan: "RPL",
  nilai: {
    tugas: 10,
    njurusan: 10,
    lomba: 10,
  },
};

function tampil({ nama, umur, kelas, jurusan, nilai: { tugas, njurusan, lomba } }) {
  return `${nama} ${umur} ${kelas} ${jurusan}  ${tugas} ${(nilai = njurusan)} `;
}

console.log(tampil(siswa));
