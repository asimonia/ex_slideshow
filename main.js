"use strict";


var url = "https://api.nasa.gov/planetary/apod?api_key=oGVn37OPC6t8IQ5KJVJPTHKPGu0ti67EQXOxKEWd&date=2010-01-10&hd=True";


$.ajax({
	  url: url,
	  success: function(result) {

	  if (result.media_type === "image") {
	  	$("#apod_img_id").attr("src", result.url);
	  }
	}
});
