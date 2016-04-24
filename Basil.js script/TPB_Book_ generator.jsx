#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

function draw() {

var dati = b.loadStrings("top_all_five.txt");  //load the text file generated with the python script
var date = new Date();							
var datiJoined = dati.join("\n"+"\n"); //The dati array is joined and add brakes within the different items
var ranNum = b.random(1, 14);
var imgNum = b.floor(ranNum);
var imageToLoad= "img_"+imgNum+".jpg"
var ranX = b.random(81, 229);
var ranY= b.random(90, 426);




// down here the basil.js magic!
b.addPage();   //da usare prossimamente
//b.doc();


b.layer("text");

b.textFont("BC Liguria", "Bold"); 
b.textSize(17);
b.textLeading(21);
b.text(datiJoined, 42.52, 66, 227, 396);      			//5 most downloaded torrent

b.textFont("GTWalsheim-Medium", "Regular"); 
b.textSize(9);
b.text("generated on " + date, 42.52, 473.15 ,262, 17);       //Time Stamp
b.text("top downloaded torrents", 121, 30, 160, 24);

b.layer("imgl");

b.image(imageToLoad,ranX,ranY);



}

b.go();
