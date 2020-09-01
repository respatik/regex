/*Buat sebuah program untuk mengecek apakah karakter
pertama dalam sebuah string mengandung huruf besar atau tidak.
Jika huruf pertama adalah huruf besar.
Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
Jika huruf pertama bukan huruf besar.
Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’
*/

// menampilkan huruf besar di huruf pertama
let regexUpperCase = /r/i;
let nameUpperCase = "Respati";
console.log(nameUpperCase.match(regexUpperCase));

// menampilkan huruf kecil di huruf pertama

let regexLowerCase = /r/;
let nameLowerCase = "respati";
console.log(nameLowerCase.match(regexLowerCase));