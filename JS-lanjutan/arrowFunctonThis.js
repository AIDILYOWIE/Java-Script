// this pada java script
// constructor function
// const Nama = function () {
//   this.nama = "aidil";
//   this.umur = 33;

//   console.log(this);
//   //   this akan mengacu kepada nama function tersebut

//   this.hallo = function () {
//     return `halo nama saya ${this.nama}`;
//   };
// };

// let aidil = new Nama();

// arrow function
// const Nama = function () {
//   this.nama = "aidil";
//   this.umur = 33;

//   console.log(this);
//   //   this akan mengacu kepada nama function tersebut

//   this.hallo = () => {
//     return `halo nama saya ${this.nama}`;
//   };
// };

// let aidil = new Nama();
// tidak semua function bisa diganti menjadi arrow function tapi kalo menthod bisa di ubah
// arrow function tidak menyimpan konteks this, jadi arrow function tidak memiliki konteks this

// object literal
// let aidil = {
//   nama: "tarisa",
//   umur: 33,
//   halo: () => {
//     console.log(`halo nama saya ${this.nama}`);
//   }
// };

// const Nomer = function () {
//   this.nomer = 0;
//   setInterval(() => {
//     this.nomer++;
//     // console.log(this.nomer)
//     // console.log(this);
//   }, 1000);
// };

// const hasil = new Nomer();

const box = document.querySelector(".box");
const tombol = document.querySelector(".tombol");

tombol.addEventListener("click", function () {
  setTimeout(() => {
    box.classList.toggle("size");
  }, 1000);     
  setTimeout(() => {
    box.classList.toggle("color");
  }, 1000);
});
