// Javascript
$(document).ready(function(){
	
//	var btnValues = ["Add","Get","Update","Delete"]; 
	var btnCorreColors = ["#efbf00",'#ff9e20',"#e65c00","#f32400"]; // color collection
//	var actions = ['/insert','/get-data','/update','delete'];

$("#add").click(function() {
	$("#add-container").show();
	$("#delete-container").hide();
	$("#update-container").hide();
	$("#get-container").hide();
	$(".btn").css("background", btnCorreColors[0]);
	$(".alert").hide();
	
});
$("#get").click(function() {
	$("#add-container").hide();
	$("#delete-container").hide();
	$("#update-container").hide();
	$("#get-container").show();
	$(".btn").css("background", btnCorreColors[1])
	$(".alert").hide();
	
});
$("#update").click(function() {
	$("#add-container").hide();
	$("#delete-container").hide();
	$("#update-container").show();
	$("#get-container").hide();
	$(".btn").css("background", btnCorreColors[2])
	$(".alert").hide();
	
});
$("#delete").click(function() {
	$("#add-container").hide();
	$("#delete-container").show();
	$("#update-container").hide();
	$("#get-container").hide();
	$(".btn").css("background", btnCorreColors[3])
	$(".alert").hide();
	
});


/*
$("#add").click(function(){
correspodingValues(btnValues[0],btnCorreColors[0],actions[0]);
	$("#add").show();
	$("#get").hide();
	$("#update").hide();
	$("#delete").hide();
})

$("#get").click(function(){
correspodingValues(btnValues[1],btnCorreColors[1],actions[1]);
	$("#add").hide();
	$("#get").show();
	$("#update").hide();
	$("#delete").hide();
})


$("#update").click(function(){
correspodingValues(btnValues[2],btnCorreColors[2],actions[2]);
	$("#add").hide();
	$("#get").hide();
	$("#update").show();
	$("#delete").hide();
})

$("#delete").click(function(){
	correspodingValues(btnValues[3],btnCorreColors[3],actions[3]);
	$("#add").hide();
	$("#get").hide();
	$("#update").hide();
	$("#delete").show();
})

function correspodingValues(btnV, btnColor,action) {
		$("id").attr("action",action);
		$("legend h1").text(btnV + " a cluster: ");
		$("#btn").text(btnV);
		$("#btn").css("background", btnColor);
	}
*/
})
