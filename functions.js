//function changestyle() {
	//var text = document.getElementById ("para1").style.backgroundColor = "blue"; 
	//var text = document.getElementById ("para1").style.fontStyle = "italic"; 

//function changestyle() {
//	var paragraph = document.getElementsByTagName("p");
//for (var i = 0 ; i < paragraph.length; i++) {
//	paragraph[i].style.fontStyle = "italic";
//}
//}
	// var changeParaText = paragraph[2].style.fontStyle = "italic";
//function changestyle() {
//	var paragraph = document.getElementsByClassName('para');

  //  var changeText = paragraph[0].innerHTML = "you saved me thanks"
 //   var changeText = paragraph[1]. innerHTML ="you saved me too"   
//}

function changestyle(){
	var paragraph = document.getElementsByClassName('para');

var firstparatext = paragraph[0].innerHTML;
var secondparatext = paragraph[1].innerHTML;
var addThem = paragraph[2].innerHTML = firstparatext + secondparatext;

var firstparatext = paragraph[0].innerHTML= " ";
var secondparatext = paragraph[1].innerHTML=" ";

}