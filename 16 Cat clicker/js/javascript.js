var clickCounter = 0;

// Sets starting clicks
$("#click_counter").text(clickCounter);

$("#cat_container").click(function() {
	clickCounter++;
	$("#click_counter").text(clickCounter);
});