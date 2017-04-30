$(document).ready(function() {

	var bSkill = 0;
	var range = 0;
	var cover = 0;
	var sEquipment = 0;
	var bonus = 0;

	
	// document.getElementById("finalResult").innerHTML = "chosenBS";

// Balistic Skills

	$('.bSkill8').on('click', function() {
		bSkill = 0;
		var clickedBS = 8;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);	
	});

	$('.bSkill9').on('click', function() {
		bSkill = 0;
		var clickedBS = 9;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);
	});

	$('.bSkill10').on('click', function() {
		bSkill = 0;
		var clickedBS = 10;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);
	});

	$('.bSkill11').on('click', function() {
		bSkill = 0;
		var clickedBS = 11;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);
	});

	$('.bSkill12').on('click', function() {
		bSkill = 0;
		var clickedBS = 12;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);
	});

	$('.bSkill13').on('click', function() {
		bSkill = 0;
		var clickedBS = 13;
		bSkill = clickedBS;
		console.log("Balistic Skill: " + bSkill);
	});

// Range Bands

	$('.rBand1').on('click', function() {
		range = 0;
		var bSRMod = bSkill + 3;
		range = bSRMod;
		console.log("Range Mod: " + range);
	});

	$('.rBand2').on('click', function() {
		range = 0;
		var bSRMod = bSkill + 3;
		range = bSRMod;
		console.log("Range Mod: " + range);
	});

	$('.rBand3').on('click', function() {
		range = 0;
		var bSRMod = bSkill - 3;
		range = bSRMod;
		console.log("Range Mod: " + range);
	});

	$('.rBand4').on('click', function() {
		range = 0;
		var bSRMod = bSkill - 6;
		range = bSRMod;
		console.log("Range Mod: " + range);
	});

// Cover

	$('.yes').on('click', function() {
		cover = 0;
		var cMod = range - 3;
		cover = cMod;
		console.log("Cover Mod: " + cover);
		$('#finalResult').html(cover);
	});

	$('.no').on('click', function() {
		cover = 0;
		var cMod = range + 0;
		cover = cMod;
		console.log("Cover Mod: " + cover);
		$('#finalResult').html(cover);
	});

});






