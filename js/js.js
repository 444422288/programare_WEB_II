jQuery('document').ready(function(){

//############################# DESCHIDERE SI INCHIDEREA IMG #######
	$('.aBigImg').on('click', function(){
		$(".blocImg:hover > .bigBlocImg").css({
		  display: "block"
		});
	});

	$('.pointX').on('click', function(){
		$(".blocImg:hover > .bigBlocImg").css({
		  display: "none"
		});
	});
//#################################################################
//############################# MENU MOB #######
	$('#logoButton').on('click', function(){
		$("#drop:hover > #contentdiv").css({
		  display: "block"	
		});
	});

	$('#aDropX').on('click', function(){
		$("#drop:hover > #contentdiv").css({  
			display: "none"	
		});	
	});
//#################################################################




});