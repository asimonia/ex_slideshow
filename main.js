"use strict";


function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

var displayPic = function () {

	let nasa_date = randomDate(new Date(2005, 6, 16), new Date());
	let url = `https://api.nasa.gov/planetary/apod?api_key=oGVn37OPC6t8IQ5KJVJPTHKPGu0ti67EQXOxKEWd&date=${nasa_date}&hd=True`;

	$.ajax({
		url: url,
		success: function(result) {

			let nasa_date = randomDate(new Date(2005, 6, 16), new Date());
			let url = `https://api.nasa.gov/planetary/apod?api_key=oGVn37OPC6t8IQ5KJVJPTHKPGu0ti67EQXOxKEWd&date=${nasa_date}&hd=True`;

	  	    if (result.media_type !== "image") {
		    	console.log("No luck");
		    } else {
		  	    $("#apod_img_id").hide().empty();
		  		$("#apod_title").hide().empty();
		  		$("#apod_img_id").attr("src", result.url).fadeIn();
		  		$("#apod_title").text(result.title).fadeIn();
		    }

		    setTimeout(function () {
		  		displayPic();
		  	}, 3000);	  
		}
	});

};

$(document).ready(displayPic);