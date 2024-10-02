// object
var siswa = {
  siswa1: {
    nama: "yojes store",
    umur: 17,
    ips: [3.0, 5.0, 10.0],
    status: "jomblo",
    alamat: {
      kota: "ponorogo",
      kec: "sukorejo",
      desa: "gelanglor",
      rtrw: "01 / 03",
    },
  },
  siswa2: {
    nama: "mia khalifah",
    umur: 18,
    ips: [3.0, 5.0, 10.0],
    status: "rondo",
    alamat: {
      kota: "bermuda",
      kec: "pocinok",
      desa: "rumah L",
      rtrw: "100 / 3000",
    },
  },
};

// membuat object
// 1.object literal
var trs = {
  nama: "sugiono",
  umur: 100,
  status: "duda",
};
// nama adalah key nya, 'sugiono' adalah nilainya
// 2.menggunakan function declration
// var a = prompt('masukan nama anda ')
// var b = prompt('masukan umur anda ')
// var c = prompt('masukan status anda ')
// function buatobjectmahasiswa(nama, umur, status) {
//   var siswa = {};
//   siswa.nama = nama;
//   siswa.umur = umur;
//   siswa.status = status;

//   return siswa;
// }

// var tampil1 = buatobjectmahasiswa(a, b, c);
// alert(tampil1);
// jika menggunakan function declaration kita cukup membuat deklarasi nya sekali, dan objectnya kita bisa buat berulang ulang
// 3.constructor
// constructor adalah function yang kusus membuat object
// pada saat kita membuat function constructor nama functionya diawali huruf besar
function Akun(nama, umur, tahun, alamat) {
  this.nama = nama;
  this.umur = umur;
  this.tahun = tahun;
  this.alamat = alamat
}

var tampil = new Akun( 'tarisa', 19, 200, alamat=['desa menggeng', 'kecamatan sukorejo', 'kabupaten ponorogo']);
var tampil1 = new Akun( 'aidil', 19, 200);
