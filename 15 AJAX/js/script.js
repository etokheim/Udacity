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
	var street = $("#street").val();
	var city = $("#city").val();
	var address = "streetstr=" + street + ",citystr=" + city;
	var imgUrl = "https://maps.googleapis.com/maps/api/streetview?size=" + $(document).height() + "x" + $(document).width() + "&location=" + address + "&heading=151.78&pitch=-0.76&key=AIzaSyCdvRRxv3KKScOz3yz9eSqSSjgET7EqKUY";

	$("#heroImage").css("background-image", "url('" + imgUrl + "')");


	nytAPIkey = "c4b3bebe95a3426fa3fb13684ae9bcd6";
	var nytUrl = "https://aapi.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPIkey + "&q="+ city + "&sort=newest";
	$.getJSON( nytUrl, function( data ) {

		articles = data.response.docs;
		for(i = 0; i < articles.length; i++) {
			$("#nytimes-articles").append( "<li id='" + articles[i] + "'><h4>" + articles[i].headline.main + "</h4><p>" + articles[i].snippet + "</p></li>" );
		}

	}).error(function() {
		$("#nytimes-header").text("Unable to connect to New York Times.");
		$("#nytimes-articles").text("Please try again later.");
	});


	var wikipediaErrorHandling = setTimeout(function() {
		console.log("timeout");
		$("#wikipedia-header").text('Unable to connect to Wikipedia.');
		$("#wikipedia-links").append('<li>Please try again later.</li>');
	}, 5000);

	$.ajax({
		url: 'https://aen.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback',
		dataType: 'jsonp',
		success: function(response) {
			console.log(response);
			clearTimeout(wikipediaErrorHandling);
			for (var i = 0; i < response[1].length; i++) {
				response[1][i];
				$wikiElem.append('<li><a href="' + response[3][i] + '">' + response[1][i] + '</a></li>');
			}
		}
	})



	return false;
};

$('#form-container').submit(loadData);


// Just a helper - so I do not have to type something in all the time
$("#street").val("1600 Pensylvania avenue");
$("#city").val("Washington DC");
$('#form-container').submit();