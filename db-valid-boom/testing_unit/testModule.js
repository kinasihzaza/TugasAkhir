var module_send_email = require('./module_send_email');
var modul_kali = require('./coba/modul_kali');
var modul_tambah = require('./coba/modul_tambah');
var modul_kurang = require('./coba/modul_kurang');
var modul_bagi = require('./coba/modul_bagi');
var modul_pangkat_dua = require('./coba/modul_pangkat_dua');

var param1 = '10';
var param2 = '3';

var targetEmail = 'tugasakhir31@gmail.com';
module_send_email.sendEmail(targetEmail, function(err, result){
	if(err){
		console.log(result);
	} else {
		console.log("email",result);
	}
});
// var perkalianResult = 0;
// var resultKali = modul_kali.kali(param1, param2, function(err,result){
// 	if(err){
// 		console.log(result);
// 	} else {
// 		console.log("hasilkali",result);
	
	
// 		var sleep = require('sleep');

// 		sleep.sleep(10);
// 		perkalianResult = result;
// 	}

// });

// var resultPangkatDua = modul_pangkat_dua.method_pangkat_dua(perkalianResult, function(err,result){

// 	if(err){
// 		console.log(result);
// 	} else {
// 		console.log("hasil pangkat",result);
// 	}
// });


// var resultBagi = modul_bagi.bagi(param1, param2, function(err,result){
// 	if(err){
// 		console.log(result);
// 	} else {
// 		console.log("hasilbagi",result);
// 	}
// });

// var resultTambah = modul_tambah.tambah(param1, param2, function(err,result){
// 	if(err){
// 		console.log(result);
// 	} else {
// 		console.log("hasiltambah",result);
// 	}
// });

// var resultKurang = modul_kurang.kurang(param1, param2, function(err,result){
// 	if(err){
// 		console.log(result);
// 	} else {
// 		console.log("hasilkurang",result);
// 	}
// });
