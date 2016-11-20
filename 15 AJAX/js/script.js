// c4b3bebe95a3426fa3fb13684ae9bcd6
function loadData() {

	var $body = $('body');
	var $wikiElem = $('#wikipedia-links');
	var $nytHeaderElem = $('#nytimes-header');
	var $nytElem = $('#nytimes-articles');
	var $greeting = $('#greeting');

	// clear out old data before new request
	$wikiElem.text("");
	$nytElem.text("");

	// load streetview

	// YOUR CODE GOES HERE!
	console.log("Submitted!");
	var street = $("#street").val();
	var city = $("#city").val();
	var address = "streetstr=" + street + ",citystr=" + city; 
	var imgUrl = "https://maps.googleapis.com/maps/api/streetview?size=" + $(document).height() + "x" + $(document).width() + "&location=" + address + "&heading=151.78&pitch=-0.76&key=AIzaSyCdvRRxv3KKScOz3yz9eSqSSjgET7EqKUY";
	console.log(imgUrl);

	$("#heroImage").css("background-image", "url('" + imgUrl + "')");



	var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=c4b3bebe95a3426fa3fb13684ae9bcd6";
	$.getJSON( nytUrl, function( data ) {
		console.log(data);
		console.log(data.response.docs[0].headline.main + data.response.docs[0].lead_paragraph);
		
		articles = data.response.docs;
		console.log(articles.length)
		for(i = 0; i < articles.length; i++) {
			console.log("running");
			$("#nytimes-articles").append( "<li id='" + articles[i] + "'><h4>" + articles[i].headline.main + "</h4><p>" + articles[i].snippet + "</p></li>" );
		}
		
	}).error(function() {
		$("#nytimes-header").text("Can't connect to New York Times.");
		$("#nytimes-articles").text("Please try again later.");
	});




	return false;
};

$('#form-container').submit(loadData);

$("#street").val("1600 Pensylvania avenue");
$("#city").val("Washington DC");
$('#form-container').submit();