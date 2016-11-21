var clickCounter = 0;
var cats = [];
var numberOfCats = 7;
var imagesAvailable = 2;
var currentlyFeaturedCat = 0;
var catHTML = '<div id="cat_container_featured" class="cat">\
				<h2>%name%</h2>\
				<div id="cat_image_aspect_ratio_trick">\
					<div id="cat_image" style="background-image: url(' + "'" + 'img/cat%imageIndex%.jpg' + "');" + '"></div>\
				</div>\
				<p id="click_container"><span class="click_counter">0</span> times</p>\
			</div>';
var catNames = {
	"boys": ["Alfie", "Archie", "Bandit", "Bear", "Bernie", "Blue", "Brody", "Buddy", "Chewie", "Clyde", "Ernie", "Fergus", "Figaro", "Finn", "Frankie", "Garfield", "Gatsby", "Gordo", "Grumpy Cat", "Heathcliff", "Jonesy", "Kirby", "Louie", "Max", "Meeko", "Miles", "Milo", "Monet", "Monty", "Mulligan", "Ole", "Opie", "Oscar", "Otis", "Percy", "Porkchop", "Rocky", "Romeo", "Ron Fleasley", "Scotter", "Simba", "Socks", "Spud", "Stewie", "Squirt", "Teddy", "Toby", "Willie", "Whiskers", "Yogi"],
	"girls": ["Adele", "Amelie", "Babushka", "Bella", "Bertie", "Bindi", "Boo", "Cat Benetar", "Chloe", "Coco", "Cupcake", "Dolly", "Dora", "Ellie", "Emmie", "Gidget", "Gizmo", "Gracie", "Jelly Bean", "Kit", "Lilly", "Leelo", "Mabel", "Maisy", "Mimi", "Minnie", "Mittens", "Muffin", "Nala", "Nellie", "Nermal", "Kitty Purry", "Olive", "Patches", "Peanut", "Penny", "Polly", "Pookie", "Poppy", "Pearl", "Pumpkin", "Sophie", "Squirt", "Tessa", "Tina Spay", "Tootsie", "Trudy", "Waffles", "Whiskers", "Willow"]
};
var catListHTML = '<div class="listed_cat_container">\
					<div class="listed_cat_image" style="background-image: url(' + "'" + 'img/cat%imageIndex%.jpg' + "');" + '" onclick="%onclick%">\
						<h3 class="listed_cat_name">\
							%name%\
						</h3>\
						<p class="click_counter%index%">\
							0\
						</p>\
					</div>\
				</div>';


/*--------------------------------------------------------------
# Cat
--------------------------------------------------------------*/
function Cat(index) {
	/*-----------------
	# Cat
	-----------------*/
	this.HTML = catHTML;
	this.name;
	this.timesClicked = 0;

	if(Math.floor(Math.random() * 2) === 0) {
		// Male
		this.name = catNames.boys[Math.floor(Math.random() * catNames.boys.length)];// + "♂";
	} else {
		// Female
		this.name = catNames.boys[Math.floor(Math.random() * catNames.boys.length)];// + "♀";
	}

	this.HTML = this.HTML.replace("%name%", this.name);

	this.HTML = this.HTML.replace("%onclick%", "cats[" + index + "].click()");
	this.HTML = this.HTML.replace("%index%", index);
	this.HTML = this.HTML.replace("%imageIndex%", index);

	this.click = function() {
		this.timesClicked++;
		$(".click_counter" + index).text(this.timesClicked);
		$(".click_counter").text(this.timesClicked);
	}

	this.swapCat = function() {
		console.log("Swapping");
		$("#cat_image").css("background-image", "url('img/cat" + index + ".jpg')");
		$("#cat_container_featured").find("h2").html(this.name);
		$(".click_counter").html(this.timesClicked);

		currentlyFeaturedCat = index;
	}


	/*-----------------
	# Cat list
	-----------------*/
	this.listHTML = catListHTML;
	this.listHTML = this.listHTML.replace("%name%", this.name);
	this.listHTML = this.listHTML.replace("%index%", index);
	this.listHTML = this.listHTML.replace("%imageIndex%", index);
	this.listHTML = this.listHTML.replace("%onclick%", "cats[" + index + "].swapCat()");
}

for (var i = 0; i < numberOfCats; i++) {
	cats.push(new Cat(i));
}

$("#kitten_container").empty();

$("#kitten_container").append(cats[0].HTML);

for (var i = 0; i < cats.length; i++) {
	$("#cat_list").append(cats[i].listHTML);
}

$("#cat_image").click(function() {
	cats[currentlyFeaturedCat].click();
	console.log(currentlyFeaturedCat);
});