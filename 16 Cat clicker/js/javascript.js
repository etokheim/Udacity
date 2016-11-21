var clickCounter = 0;

// Sets starting clicks
$("#click_counter").text(clickCounter);

$("#cat_container").click(function() {
	console.log("Cat is clicked");
	clickCounter++;
	$("#click_counter").text(clickCounter);
});