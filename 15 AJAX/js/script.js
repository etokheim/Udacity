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


	var nytAPIkey = "c4b3bebe95a3426fa3fb13684ae9bcd6";
	var nytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPIkey + "&q="+ city + "&sort=newest";

	$.getJSON( nytUrl, function( data ) {
		articles = data.response.docs;

		for(i = 0; i < articles.length; i++) {
			$("#nytimes-articles").append( "<li id='" + articles[i] + "'><h4>" + articles[i].headline.main + "</h4><p>" + articles[i].snippet + "</p></li>" );
		}
	}).error(function() {
		$("#nytimes-header").text("Can't connect to New York Times.");
		$("#nytimes-articles").text("Please try again later.");
	});

	
		
$.ajax( {
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
        action: 'query',
        meta: 'tokens',
        format: 'json',
        origin: 'https://www.mediawiki.org'
    },
    xhrFields: {
        withCredentials: true
    },
    dataType: 'json'
} ).done( function ( data ) {
    $.ajax( {
        url: 'https://en.wikipedia.org/w/api.php?origin=https://www.mediawiki.org',
        method: 'POST',
        data: {
            action: 'options',
            format: 'json',
            token: data.query.tokens.csrftoken,
            optionname: 'userjs-test',
            optionvalue: 'Hello world!'
        },
        xhrFields: {
            withCredentials: true
        },
        dataType: 'json'
    } );
} );




	return false;
};

$('#form-container').submit(loadData);

$("#street").val("1600 Pensylvania avenue");
$("#city").val("Washington DC");
$('#form-container').submit();