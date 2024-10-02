


while (true){
// menangkap pilihan dari user


    var p = prompt('AYO MAIN SAMA TANTE  \n pilih : \n1.gajah \n2.semut \n3.orang');

        // menangkap pilihan komputer
        // membangkitkan bilangan random

    var comp = Math.random();

    console.log(comp)

    if(comp < 0.34) {
        comp = 'batu';
    }else if (comp >= 0.34 && comp < 0.55){
        comp = 'gunting';
    }else {
        comp = 'kertas';
    }

    var hasil = '';
    
    // menentukan rules
    if (p == comp){
        hasil = 'seri';
    }else if (p == 'batu'){
        hasil = (comp == 'gunting') ? 'menang!' : 'kalah!';
    }else if (p == 'gunting'){
        hasil = (comp == 'kertas') ? 'menang' : 'kalah';
    }else if (p == 'kertas'){
        hasil = (comp == 'batu')? 'menang!' : 'kalah!';
    }else {
        hasil = 'memasukan pilihan yang salah';
    }

    alert('kamu memilih : '+p+' dan tante memilih : '+comp+' maka kamu '+hasil);

    true = confirm('mau main lagi sama tante ?')
}

alert('yahh tante sedih')