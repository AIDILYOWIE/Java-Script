var angkotBeroprasi = 6;
var jmlhAngkot = 10;
for( var angkot = 1; angkot <= jmlhAngkot; angkot++){

    if(angkot <= angkotBeroprasi){
        console.log('angkot no '+angkot+' beroprasi dengan baik');
    }else if (angkot === 8){
        console.log('angkot no '+angkot+' sedang lembur')
    }else {
        console.log('angkot no '+angkot+' sedang tidak beroprasi');
    }
    
}