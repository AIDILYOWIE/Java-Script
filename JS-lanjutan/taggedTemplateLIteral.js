// Tegged Template
const nama = {
  nama: "aidil yowie",
  title: "Full Stack Developer",
};

// function coba(s, nama, title, email) {
//   console.log(s);
//   console.log(nama);
//   console.log(email);
//   return title;
// }

// const el = coba`halo nama saya ${nama.nama}, saya punya skill ${nama.title} my title`;
// console.log(el);
//  argument coba akan masuk kedalan parameter coba
// ketika kita menjalankan  template literal itu, maka take templatenya akan memecah tiap-tiap string di dalamnya dan dipisahkan oleh expression
//  expression akan masuk ke parameter berikutnya

//  rest Parameter
// function coba(s, ...values) {
//   return values;
// }

// const el = coba`halo nama saya ${nama.nama}, saya punya skill ${nama.title} my title`;
// console.log(el);
// rest parameter mampu menampung sulruh expresion yang ada di template literal
//  ...values akan menjadi array yang menampung suluruh expresion template literal

// untuk menampilkan suluruh isi template literal
// function coba(s, ...values) {
//   // Tanpa Hire Order Function
//   // let result = "";
//   // s.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   // Hire Order Function
//   return s.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const el = coba`halo nama saya ${nama.nama}, saya punya skill ${nama.title} my title`;
// document.body.innerHTMLw = el;

// Highlight
// const a = "aidil";
// const b = "Full Stack Developer";
// function coba(s, ...values) {
//   // Hire Order Function
//   return s.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
// }

// const el = coba`halo nama saya ${a}, saya punya skill ${b} my title`;
// document.body.innerHTML = el;

// Escaping
// function escapeHTML(strings, ...values) {
//   return strings.reduce((result, string, i) => {
//     let escapedValue = values[i] ? String(values[i]).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") : "";
//     return result + string + escapedValue;
//   }, "");
// }

// const unsafe = "<div>Some HTML</div>";
// const el = escapeHTML`Safe string: ${unsafe}`;

// console.log(el);

// translation dan internationalization
// function i18n(strings, ...values) {
//   const translations = [
//     ["Hello", "Your total is ", "."],
//     ["Halo", "Total anda adalah ", "."],
//   ];
//   return translations[1].reduce((result, str, i) => result + str + (values[i] || ""), "");
// }

// const total = 1000;
// console.log(i18n`${total}`);
// // Output: Halo! Total anda adalah 1000.

// Latihan soal
// Format mata uang
function formatCurrency(strings, ...values) {
  return strings.reduce((result, string, i) => {
    let format = values[i] !== undefined ? new Intl.NumberFormat("id-ID", { style: "currency", currency: "USD" }).format(values[i]) : "";
    return result + string + format;
  }, "");
}

const amount = 50000;
console.log(formatCurrency`Jumlah total: ${amount}.`);
