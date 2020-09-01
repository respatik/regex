/*Buat sebuah program yang menyediakan kalimat berikut sehingga user mendapatkan pencarian yang persis sama.
Bagaimana cara memulai usaha bisnis
Bootcamp impact byte
Status covid hari ini*/

let searchEngine = prompt("masukkan sebuah kalimat")
let myRegexOne = /bagaimana cara memulai usaha bisnis/
let myRegexTwo = /bootcamp impact byte/
let myRegexThree = /status covid hari ini/

console.log(myRegexOne.test(searchEngine))
console.log(myRegexTwo.test(searchEngine))
console.log(myRegexThree.test(searchEngine))