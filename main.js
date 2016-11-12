"use strict";


// returns a random date from two arguments; insert into the url to get a random picture for slideshow
function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

var nasa_date = randomDate(new Date(2005, 6, 16), new Date());
var url = `https://api.nasa.gov/planetary/apod?api_key=oGVn37OPC6t8IQ5KJVJPTHKPGu0ti67EQXOxKEWd&date=${nasa_date}&hd=True`;

// calls the NASA API to transform the picture on the DOM
$.ajax({
	  url: url,
	  success: function(result) {

	  if (result.media_type === "image") {
	  	$("#apod_img_id").attr("src", result.url);
	  }

	  $("#apod_title").text(result.title);
	}
});
