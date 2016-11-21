var clickCounter = 0;
var cats = [];
var numberOfCats = 2;
var catHTML = '<div id="cat_container%index%" class="cat" onclick="%onclick%">\
				<h1>%kittenName%</h1>\
				<div id="cat_image"></div>\
				<p id="click_container"><span id="click_counter">0</span> times</p>\
			</div>';
var catNames = {
	"boys": ["Alfie", "Archie", "Bandit", "Bear", "Bernie", "Blue", "Brody", "Buddy", "Chewie", "Clyde", "Ernie", "Fergus", "Figaro", "Finn", "Frankie", "Garfield", "Gatsby", "Gordo", "Grumpy Cat", "Heathcliff", "Jonesy", "Kirby", "Louie", "Max", "Meeko", "Miles", "Milo", "Monet", "Monty", "Mulligan", "Ole", "Opie", "Oscar", "Otis", "Percy", "Porkchop", "Rocky", "Romeo", "Ron Fleasley", "Scotter", "Simba", "Socks", "Spud", "Stewie", "Squirt", "Teddy", "Toby", "Willie", "Whiskers", "Yogi"],
	"girls": ["Adele", "Amelie", "Babushka", "Bella", "Bertie", "Bindi", "Boo", "Cat Benetar", "Chloe", "Coco", "Cupcake", "Dolly", "Dora", "Ellie", "Emmie", "Gidget", "Gizmo", "Gracie", "Jelly Bean", "Kit", "Lilly", "Leelo", "Mabel", "Maisy", "Mimi", "Minnie", "Mittens", "Muffin", "Nala", "Nellie", "Nermal", "Kitty Purry", "Olive", "Patches", "Peanut", "Penny", "Polly", "Pookie", "Poppy", "Pearl", "Pumpkin", "Sophie", "Squirt", "Tessa", "Tina Spay", "Tootsie", "Trudy", "Waffles", "Whiskers", "Willow"]
}


function Cat(index) {
	this.HTML = catHTML;
	this.kittenName;
	this.timesClicked = 0;

	if(Math.floor(Math.random() * 2) === 0) {
		this.kittenName = catNames.boys[Math.floor(Math.random() * catNames.boys.length)];
	} else {
		this.kittenName = catNames.boys[Math.floor(Math.random() * catNames.boys.length)];		
	}

	this.HTML = this.HTML.replace("%kittenName%", this.kittenName);

	this.HTML = this.HTML.replace("%onclick%", "cats[" + index + "].click()");
	this.HTML = this.HTML.replace("%index%", index);

	this.click = function() {
		this.timesClicked++;
		$("#cat_container" + index).find("#click_counter").text(this.timesClicked);
	}
}

function catClick() {
	console.log(this);
}

for (var i = 0; i < numberOfCats; i++) {
	cats.push(new Cat(i));
}

$("#kitten_container").empty();

for (var i = 0; i < cats.length; i++) {
	$("#kitten_container").append(cats[i].HTML);
}