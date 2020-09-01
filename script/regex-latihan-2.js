/*Buat sebuah program untuk memvalidasi format nomor handphone
Nomor handphone minimum 10 digit dan maksimum 12 digit
Hanya menerima digit nomer
*/

let myRegex =/\d{10,12}/
let phoneNumber = prompt("masukkan nomor hape anda")
console.log(myRegex.test(phoneNumber));