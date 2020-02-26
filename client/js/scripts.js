var i1 = {name:"Aangan", addr:"Footscray", photo:"./images/indian/aanganfoot.jpg"};
var i2 = {name:"Anshuman Da Dhaba", addr:"Clayton", photo:"./images/indian/anshu.jpg"};
var i3 = {name:"Bilal", addr:"Sydney Rd", photo:"./images/indian/bilal.jpg"};
var i4 = {name:"Chilli India", addr:"Melbourne Central", photo:"./images/indian/chillindiamc.jpg"};
var i5 = {name:"Dosa Corner", addr:"King St", photo:"./images/indian/dosacornercbd.jpg"};
var i6 = {name:"Dosa Hut", addr:"King St", photo:"./images/indian/dosahutcbd.jpg"};
var i7 = {name:"Dosa Hut", addr:"Footscray", photo:"./images/indian/dosahutfoot.jpg"};
var i8 = {name:"The Flames", addr:"Kyneton", photo:"./images/indian/flameskyn.jpg"};
var i9 = {name:"Flora", addr:"Flinders St", photo:"./images/indian/flora.jpg"};
var i10 = {name:"Namaste India", addr:"Lygon St", photo:"./images/indian/namaste.jpg"};
var i11 = {name:"Paramount Egg House", addr:"Princes Hwy", photo:"./images/indian/paramount.jpg"};
var i12 = {name:"Royal Eatery", addr:"Lygon St", photo:"./images/indian/royaleatery.jpg"};
var i13 = {name:"Sankranthi", addr:"Footscray", photo:"./images/indian/sankranthi.jpg"};
var i14 = {name:"Saravana Bhavan", addr:"King St", photo:"./images/indian/sbhavancbd.jpg"};
var i15 = {name:"Saravana Bhavan", addr:"Wantirna", photo:"./images/indian/sbhavanwan.jpg"};
var i16 = {name:"Kasturi", addr:"Frankston", photo:"./images/indian/kasturifrankston.jpg"};
var i17 = {name:"Kwality Tandoori", addr:"Frankston", photo:"./images/indian/kwalityfrankston.jpg"};
var i18 = {name:"Spice Club", addr:"Frankston", photo:"./images/indian/spiceclubfrankston.jpg"};
var i19 = {name:"Mornington Masala", addr:"Mornington", photo:"./images/indian/mornmasala.jpg"};


var s1 = {name:"Spicy Flames", addr:"Princes Hwy", photo:"./images/sl/spicyflames.jpg"};
var s2 = {name:"Colombo Impex", addr:"Clow St, Dandenong", photo:"./images/sl/colombo.jpg"};
var s3 = {name:"The Mango Tree", addr:"Clow St, Dandenong", photo:"./images/sl/mangotree.jpg"};
var s4 = {name:"Araliya", addr:"St. Kilda", photo:"./images/sl/araliya.jpg"};
var s5 = {name:"Cinnamons", addr:"St. Kilda Rd", photo:"./images/sl/cinnamons.jpg"};
var s6 = {name:"Cinnamons Lt Collins", addr:"Lt. Collins St", photo:"./images/sl/cinnamonsltcoll.jpg"};
var s7 = {name:"Cafe Pilawoos", addr:"Princes Hwy, Noble Park", photo:"./images/sl/pilawoos.jpg"};
var s8 = {name:"Sigiri", addr:"Northcote", photo:"./images/sl/sigiri.jpg"};
var s9 = {name:"Drums", addr:"Victoria Market", photo:"./images/sl/drums.jpg"};

var j1 = {name:"Hungry Jacks", addr:"Little River", photo:"./images/junk/hjaxltriver.jpg"};
var j2 = {name:"Hungry Jacks", addr:"Sydenham", photo:"./images/junk/hjaxsydenham.jpg"};
var j3 = {name:"Krispy Kreme", addr:"Fawkner", photo:"./images/junk/krispykreme.jpg"};
var j4 = {name:"McDonald's", addr:"Calder Freeway", photo:"./images/junk/mcdcalder.jpg"};
var j5 = {name:"McDonald's", addr:"Victoria Parade", photo:"./images/junk/mcdvicpde.jpg"};
var j6 = {name:"Oporto", addr:"Little River", photo:"./images/junk/oportoltriver.jpg"};
var j7 = {name:"Subway", addr:"Ascot Vale", photo:"./images/junk/subwayascotvale.jpg"};
var j8 = {name:"Subway", addr:"Swanston Street", photo:"./images/junk/subwayswanston.jpg"};
var j9 = {name:"Ikea", addr:"Richmond", photo:"./images/junk/ikearichmond.jpg"};



var indianrest = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11, i12,i13,i14,i15,i16, i17, i18,i19];

var slankanrest = [s1,s2,s3,s4,s5,s6,s7,s8,s9];

var junkrest = [j1,j2,j3,j4, j5,j6,j7,j8,j9];


$(document).ready(function(){

	
    
    $('#prevarrow').hide();   
    $('#nextarrow').hide();   


    $('#ind').click(function(e) {
    	$('#prevarrow').show();   
    	$('#nextarrow').show();   
        console.log("Indian has been clicked");        
        showRestaurants(indianrest);
        e.preventDefault();
    });

    $('#slank').click(function(e) {    	
    	$('#prevarrow').show();   
    	$('#nextarrow').show();   
        console.log("Sri Lankan has been clicked");       
        showRestaurants(slankanrest);
        e.preventDefault();
    });

    $('#junk').click(function(e) {
    	$('#prevarrow').show();   
    	$('#nextarrow').show();   
        console.log("Junk has been clicked");       
        showRestaurants(junkrest);
        e.preventDefault();
    });
});


function showRestaurants(restaurantlist)
{

	var caroinner = document.getElementById("innercaro");
	var caroinnerchild = caroinner.firstElementChild;
	while(caroinnerchild)
	{
		caroinner.removeChild(caroinnerchild);
		caroinnerchild = caroinner.firstElementChild;
	}

	for(var i=0 ; i< restaurantlist.length ; i++) {
    	$('<div class="carousel-item" data-interval="2000"><img src="'+restaurantlist[i].photo+'" class="d-block w-100"> <div class="carousel-caption d-none d-md-block">\
        <h2>' + restaurantlist[i].name + '</h2>\
        <h3>' + restaurantlist[i].addr+'</h3>\
      </div> </div>').appendTo('.carousel-inner'); 
    }

  $('.carousel-item').first().addClass('active');  
  $('#restaurantcarousel').carousel();

}