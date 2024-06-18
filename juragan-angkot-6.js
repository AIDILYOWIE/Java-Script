var angkotBeroprasi = 6;
var jmlhAngkot = 10;
for( var angkot = 1; angkot <= jmlhAngkot; angkot++){

    if(angkot <= angkotBeroprasi && angkot !== 5){
        console.log('angkot no '+angkot+' beroprasi dengan baik');
    }else if(angkot === 6){
        console.log('angkot no '+angkot+' beroprasi dengan baik');
    }else if (angkot === 8 || angkot === 9 || angkot === 5){
        console.log('angkot no '+angkot+' sedang lembur');
    }else {
        console.log('angkot no '+angkot+' sedang tidak beroprasi');
    } 
    
}

// && / dan semua kondisi harus bernilai true
//  || / or salah satu kondisi harus bernilai false