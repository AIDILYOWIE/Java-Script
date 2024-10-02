// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
//array.from digunakan untuk mengubah nodelist menjada array
// pilih hanya yang javascript lanjutan
console.log(videos);
let jsLanjutan = videos
  .filter((video) => video.textContent.includes("Teknik"))
  // textContent untuk text di html
  // include untuk melihat isi / terdapat apa dia textContent

  // ambil durasi masing masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi parseFloat, ubah menit menjadi detik
  .map((waktu) => {
    // 19.35 -> [19, 35] di split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    // console.log(parts);
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detiknya
  .reduce((total, detik) => total + detik);

// ubah format menjadi jam-menit-detik
const jam = Math.floor(jsLanjutan / 3600);
// jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di dom
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlhVideo = videos.filter((video) => video.textContent.includes("Teknik")).length;
const p = document.querySelector(".total-video");
p.textContent = `${jmlhVideo} video`;
