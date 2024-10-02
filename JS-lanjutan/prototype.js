// prototype
function Siswa(nama, energi) {
    // let this = Object.create(Siswa.prototype);
    // di belakang layar

    this.nama = nama;
    this.energi = energi;

    Siswa.prototype.tidur = function(tidur) {
        this.energi += tidur * 2;
        if (this.energi > 10){
            return `ayo bangun dan jalanin hidup muh dengan penuh senyum, semangat ${this.nama}`
        }else {
            return`selamat tidur ${this.nama}`;
        }
    }
    Siswa.prototype.makan = function(makan) {
        this.energi += makan;
        return `selamat makan ${this.nama}`;
    }

    Siswa.prototype.main = function(main){
        this.energi -= main;
        if (this.energi < 5 || this.energi == 5){
            return `waktunya istirahat ${this.nama}`;      
        }else {
            return `selamat bermain ${this.nama}`;
        }
    }
    
    // return this;
    // dibelakang layar
};

let yojes = new Siswa('yojes', 10);

// versi class
// class Siswa  {
//     constructor (nama, energi){
//         this.nama = nama;
//         this.energi = energi;

        
//     }

//     main(jam){
//         this.nama -= jam
//         console.log(`selamat main`)
//     }

// }

// let yojes = new Siswa('yojes', 10)
// class hanya membungkus saja agar lebih masuk akal, tapi yang terjadi di belakang layar protoype yang melakukanya

// semua yang ada di dalam javascript itu object, jadi setiap object memiliki prototype
// contoh

// jika kita menulis ini
// let nama = [];
// yang terjadi di belakang layar adalah 
// construction function
// let nama = new Array();

// anggap aja di dalam javascript ada ini dan jika menggunakan function construction
// function Array() {
//     let this = Object.create(Array.prototype)
// }
// dan method" dari array merupakan prototype object dari array 
// kalian juga bisa cek isi prototype dari sebuah object di console
// contoh Array.prototype






// function declaration
// function jenissiswa(nama, energi){
//     let siswa = {};
//     siswa.nama = nama;
//     siswa.energi = energi;

//     jenissiswa.prototype.makan = function(makan){
//         this.energi += makan;
//         console.log(`selamat makan ${this.nama}`)
//     }

//     return siswa;
// }

// let yojes = jenissiswa('yojes', 10)