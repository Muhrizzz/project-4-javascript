//array string
// const cars = [
//     'ayla',
//     'agya',
//     'calya',
//     'sigra',
//     'innova',
//     'kijang'
// ]
// const number = [1,2,3,4,5,6,7]

// console.log(cars)
// console.log(number)

//Metode array 
//fungsi document.write untuk menampilkan di browser 
// document.write(cars + '<br>')//fungsi <br> menambah spasi agar turun kebawah 
// document.write(number + '<br>')
// document.write(cars[3] + '<br>')//menampilkan data cars ke-3(dihitung dari 0)
// document.write('<span>Tipe mobil</span>:' +cars[3] +'<br>')
// document.write('<span>jumlah data</span>:' +cars.length +'<br>')//menampilkan jumlah data
// document.write('<span>Join</span>:' +cars.join(' - ')+'<br>')//Menuliskan elemen-elemen array ke dalam satu string
// document.write('<span>Pop</span>:' +cars.pop()+'<br>')//menghapus data terakhir
// document.write('<span>Add</span>:' +cars.push('bmw','avanza')+'<br>')//menambahkan data dari belakang 
// document.write(cars + '<br>')//fungsi <hr> manambahkan garis 
// document.write(cars.concat(number)+'<hr>')//memanggil data bersamaan

// //Looping
// for(index = 0;index <7; index ++){
//     document.write(cars[index]+ '<br>')
// }


//const data = [
//    {
//        "id": 7,
//        "email": "michael.lawson@reqres.in",
//        "first_name": "Michael",
//       "last_name": "Lawson",
//        "avatar": "https://reqres.in/img/faces/7-image.jpg"
//   },
//    {
//        "id": 8,
//        "email": "lindsay.ferguson@reqres.in",
//        "first_name": "Lindsay",
//        "last_name": "Ferguson",
//       "avatar": "https://reqres.in/img/faces/8-image.jpg"
//    },
//    {
//        "id": 9,
//        "email": "tobias.funke@reqres.in",
//        "first_name": "Tobias",
//        "last_name": "Funke",
//        "avatar": "https://reqres.in/img/faces/9-image.jpg"
 //   },
//    {
//        "id": 10,
 //       "email": "byron.fields@reqres.in",
 //       "first_name": "Byron",
 //       "last_name": "Fields",
 //       "avatar": "https://reqres.in/img/faces/10-image.jpg"
 //   },
 //   {
 //       "id": 11,
 //       "email": "george.edwards@reqres.in",
 //       "first_name": "George",
 //       "last_name": "Edwards",
  //      "avatar": "https://reqres.in/img/faces/11-image.jpg"
 //   },
 //   {
 //       "id": 12,
 //       "email": "rachel.howell@reqres.in",
  //      "first_name": "Rachel",
  //      "last_name": "Howell",
  //      "avatar": "https://reqres.in/img/faces/12-image.jpg"
  //  }
//]

//var container = document.getElementById("di-user");
//for (user of data) {
// iterate location properties
//    for (var prop in user) {
//        if (Object.prototype.hasOwnProperty.call(user, prop)) {
//            //create and append grid item
//            var item = document.createElement("DIV");
//            item.classList.add(user[prop]);
//            item.innerHTML = user[prop];
//            container.appendChild(item);
//        }
//    }
//}

//axios.get('https://reqres.in/api/users?page=2')
//  .then(function (response) {
    // handle success
//    console.log(response);
//  })
//  .catch(function (error) {
    // handle error
//    console.log(error);
//  })
// .then(function () {
//    // always executed
// });

//console.log('jenis mobil', cars)
//console.log(cars[3])

//length
//console.log('JUMLAH DATA', cars.length)

//join



// function user (name, age){
//     console.log('Nama :',name, 'dan Usia :' ,age)
// }
// user ('Muhriz', 24)
// user ('Muh', 24)
// user ('Riz', 24)


// const user2 = function(name, age){
//     const result = `Nama : ${name} dan usia :${age}` 
//     return result
// }
// const riz = user2('Riz',24)
// const Muh = user2('Muh',24)
// console.log(muh)
// console.log(riz)

// const user3 = (nama, usia) => {
//     const result = `Nama : ${nama} dan usia :${usia}`
//     return result 
// }
// console.log(user3{'Muhriz', 24})
// console.log(user3{'Muh', 24})
// console.log(user3{'Riz', 24})

// kondisi
const score = 40
if(score > 50){
    console.log('lulus')
} else {
    console.log('tidak lulus')
}

const scoremtk = 10

if((scoremtk > 80) && (scoremtk < 100)){
    console.log('Sangat memuaskan')
} else if (scoremtk > 50){
    console.log('lulus memuaskan')
} else if (scoremtk < 50){
    console.log('tidak lulus')    
} else {
    console.log('Selamat Belajar')
}

