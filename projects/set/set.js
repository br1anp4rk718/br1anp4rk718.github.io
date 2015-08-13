
var set_array=['gde1.jpeg', 'gde2.jpeg', 'gde3.jpeg', 'gds1.jpeg', 'gds2.jpeg', 'gds3.jpeg', 'gdt1.jpeg', 'gdt2.jpeg',
'gdt3.jpeg', 'goe1.jpeg','goe2.jpeg','goe3.jpeg','gos1.jpeg','gos2.jpeg','gos3.jpeg','got1.jpeg','got2.jpeg','got3.jpeg',
'gwe1.jpeg','gwe2.jpeg','gwe3.jpeg','gws1.jpeg','gws2.jpeg','gws3.jpeg','gwt1.jpeg','gwt2.jpeg','gwt3.jpeg','pde1.jpeg',
'pde2.jpeg','pde3.jpeg','pds1.jpeg','pds2.jpeg','pds3.jpeg','pdt1.jpeg','pdt2.jpeg','pdt3.jpeg','poe1.jpeg','poe2.jpeg',
'poe3.jpeg','pos1.jpeg','pos2.jpeg','pos3.jpeg','pot1.jpeg','pot2.jpeg','pot3.jpeg','pwe1.jpeg','pwe2.jpeg','pwe3.jpeg',
'pws1.jpeg','pws2.jpeg','pws3.jpeg','pwt1.jpeg','pwt2.jpeg','pwt3.jpeg','rde1.jpeg','rde2.jpeg','rde3.jpeg','rds1.jpeg',
'rds2.jpeg','rds3.jpeg','rdt1.jpeg','rdt2.jpeg','rdt3.jpeg','roe1.jpeg','roe2.jpeg','roe3.jpeg','ros1.jpeg','ros2.jpeg',
'ros3.jpeg','rot1.jpeg','rot2.jpeg','rot3.jpeg','rwe1.jpeg','rwe2.jpeg','rwe3.jpeg','rws1.jpeg','rws2.jpeg','rws3.jpeg',
'rwt1.jpeg','rwt2.jpeg','rwt3.jpeg'];



 

var oldCards = [];


function getRandomImage(imgAr, path) {  //getRandomImage is the load script of the twelve random cards generated
		for (i=1;i<13;i++) {
		    path = path || 'images/'; // default path here
    		var num = Math.floor( Math.random() * imgAr.length ); //generating a random img url
    		var img = imgAr[ num ];
    		imgAr.splice(num, 1) // so that it won't duplicate the same image
    		var imgStr = '<button type=button id=replacedCards onclick=replacedCards(set_array)>\n' + '<div class=boxNum' + i + '>' + '\n' + '<img src="' + path + img + '" class = "pic">' + '\n' + '</div>' + '\n' + '</button>';
    		oldCards.push(imgStr);
 			document.write(imgStr);
 			oldCards.splice(0, 12);
 			}
    		} 



var new_array=[];//array that's going to be holding the clicked url values





var color = function(newAr) {
	var first = newAr[0].charAt(7);
	var second = newAr[1].charAt(7);
	var third = newAr[2].charAt(7);
	if ((first == second) && (second == third)) {
		return true;
	}
	else if (((first != second) && (second != third)) && (first != third)) {
		return true;
	}
	else {
		return false;

	}
};


var shape = function(newAr) {
	var index1 = newAr[0].charAt(8);
	var index2 = newAr[1].charAt(8);
	var index3 = newAr[2].charAt(8);
	if ((index1 == index2) && (index2 == index3)) {
		return true;
	}
	else if (((index1 != index2) && (index2 != index3)) && (index1 != index3)) {
		return true;
	}
	else {
		return false;
	}
};



var pattern = function(newAr) {
	var pattern1 = newAr[0].charAt(9);
	var pattern2 = newAr[1].charAt(9);
	var pattern3 = newAr[2].charAt(9);
	if ((pattern1 == pattern2) && (pattern2 == pattern3)) {
		return true;
	}
	else if (((pattern1 != pattern2) && (pattern2 != pattern3) && (pattern1 != pattern3))) {
		return true;
	}
	else {
		return false;
	}
};



var quantity = function(newAr) {
	var quantity1 = newAr[0].charAt(10);
	var quantity2 = newAr[1].charAt(10);
	var quantity3 = newAr[2].charAt(10);
	if ((quantity1 == quantity2) && (quantity2 == quantity3)) {
		return true;
	}
	else if (((quantity1 != quantity2) && (quantity2 != quantity3) && (quantity1 != quantity3))) {
		return true;
	}
	else {
		return false;
	}
};

function rps() { // function that increments points on the webpage every time u get a set
    var point = document.getElementById('point');
    var number = point.innerHTML;
    number++;
    point.innerHTML = number;
}


$(document).ready(function() {
	$('button').click(function() {
		var url = $(this).find('.pic').attr('src');
		new_array.push(url);
			if ((new_array.length == 3) && ((color(new_array) == false) || (shape(new_array)== false) || (pattern(new_array)==false) || (quantity(new_array)==false))) {
				new_array.splice(0, 3);
				alert('This is not a set!');
			}
			else if ((new_array.length == 3) && ((color(new_array)==true) && (shape(new_array)==true) && (pattern(new_array)==true) && (quantity(new_array)==true)))  {
				alert('This is a set!');
				rps();
				$(this).remove();
				new_array.splice(0,3);
			}
			
			
		})


	

	})




function replacedCards(imgAr) { //function that replaces the clicked images;
	var random = Math.floor(Math.random() * imgAr.length);
	var newPic = imgAr[random];
	document.getElementById('replacedCards').src = 'images/' + newPic + '.jpeg';
}



