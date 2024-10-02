// object.create()

let MenthodSiswa = {
  sedih: function (darah) {
    this.energi -= darah;
    if (this.energi == 1) {
      console.log(`${this.nama} sangat sedih dan butuh pelukan, energinya sisa ${this.energi}`);
    } else if (this.energi == 0) {
      console.log(`${this.nama}  telah tiada :(, energinya sisa ${this.energi}`);
    } else {
      console.log(`yahh ${this.nama} sangat sedih dan darahnya sisa ${this.energi}`);
    }
  },

  ketemu: function (pelukan) {
    this.energi += pelukan;
    pelukan * 2;
    console.log(`${this.nama} sangat suka di peluk, energinya menjadi ${this.energi}`);
  },

  ketemu: function (pelukan) {
    this.energi += pelukan;
    console.log(`${this.nama} suka ketemuan, energinya menjadi ${this.energi}`);
  },
};

function jenisnama(nama, energi) {
  let siswa = Object.create(MenthodSiswa);
  siswa.nama = nama;
  siswa.energi = energi;

  return siswa;
}

let melisa = jenisnama("melisa", 10);
let aidil = jenisnama("aidil", 10);
let yojes = jenisnama("yojes", 10);

// constructor function
// function siswa(nama, energi){

//     Object.create(MenthodSiswa)
//     this.nama = nama;
//     this.energi = energi;

// }
// let aidil = new siswa("aidil", 10)

// kalo kita melakukan instansisasi pada objectnya, itu ternyata di belakang layar dua menthod tersebut tetap di buat dan disimpan ke dalam memori
// untuk menangani kasus tersebut kita harus membuat object terpisah yang diisi method tersebut, nanti object menthod kita panggil ke object lama
// parameter dari object.create(object_parent) itu mengacu ke parent objectnya / nama method
