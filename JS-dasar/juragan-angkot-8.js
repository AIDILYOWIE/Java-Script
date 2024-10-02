// membuat object angkot
function Angkot(sopir, rute, penumpang, kas) {
  (this.sopir = sopir), (this.rute = rute), (this.penumpang = penumpang), (this.kas = kas);

  this.penumpangNaik = function (namapenumpang) {
    if ( this.penumpang.length == 0) {
        this.penumpang.push(namapenumpang);
       
        return this.penumpang;
    }else {
        for ( var i = 0; i < penumpang.length; i++){
            if (this.penumpang[i] == undefined){
                this.penumpang[i] = namapenumpang;
                return this.penumpang;
            }else if (this.penumpang[i] == namapenumpang){
                console.log('nama sudah ada');
                return this.penumpang;
            }else if (i == this.penumpang.length -1 ){
                this.penumpang.push(namapenumpang);
                return this.penumpang;;
            }
        }
    }
  };

  this.penumpangTurun = function (namapenumpang, kas) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namapenumpang) {
        this.penumpang[i] = undefined;
        this.kas += kas;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        console.log(namapenumpang + " tidak ada di dalam angkot");
        return this.penumpang;
      } 
    }
  };
}
var angkot1 = new Angkot("yojes", ["sabang", "marauke"], [], 0);
var angkot2 = new Angkot("yojes", ["sabang", "marauke"], [], 0);
var angkot3 = new Angkot("yojes", ["sabang", "marauke"], [], 0);
