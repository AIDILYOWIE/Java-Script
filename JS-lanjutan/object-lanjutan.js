// membuat objek pada javascript
// 1.object literal

    // let nama = {
    // nama: "yojes",
    // darah: 10,
    // ketemu: function (peluk) {
    //     this.darah + peluk;
    //     console.log(`${this.nama} kecewa dan darahnya tinggal ${this.darah}`);
    // },
    // };

    // let nama1 = {
    // nama: "yojes",
    // darah: 10,
    // sakithati: function (sakit) {
    //     this.darah - sakit;
    //     console.log(`${this.nama} kecewa dan darahnya tinggal ${this.darah}`);
    // },
    // };
// didalama javascript kita bisa menggunakan backtik untuk menggantikan petik 2, kelebihan backtik / string literal kalian bisa menggabungkan variable / property tanpa harus keluar dari string 


// 2.function declaration

function jenisnama(nama, energi) {

  let siswa = {};
  siswa.nama = nama;
  siswa.energi = energi;

  siswa.ketemu = function (pelukan) {
      this.energi += pelukan;
      console.log(`${this.nama} suka ketemuan, enrginya menjadi ${this.energi}`);
  };

  siswa.menguras = function (darah) {
    this.energi -= darah;
    console.log(`darah ${this.nama} sisa ${this.energi}, hahahhahahahh`);
};


  return siswa;

}

let nama1 = jenisnama("yojes", 10);
// jika menggunakan function declaration kita harus menambahkan return dan memanggilnya, kita harus return nama objek nya 


// 3.constructor function
// function Jenisnama(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     siswa.kangen = function (darah) {
//     this.energi -= darah;
//     console.log(`darah ${this.nama} sisa ${this.energi}, hahahhahahahh`);
//     };

//     siswa.ketemu = function (pelukan) {
//         this.energi += pelukan;
//         console.log(`${this.nama} suka ketemuan, enrginya menjadi ${this.energi}`);
//     }
// }

// let nama1 = new Jenisnama("AIDIL", 10);
// let nama1 = new Jenisnama("yojes", 10);
// jika menggunakan constructor funtion kita tidak perlu menuliskan deklarasi variable(sperti objek) dan returnnya, itu secara otomatis dilakukan oleh javascript
// tapi saat kita menampilkan fuhnction kita harus menuliskan keyword new

// object.create()
