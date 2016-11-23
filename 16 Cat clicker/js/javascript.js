var model = {
	cat: {
		numberOfCats: 12,

		selected: "",

		names: {
			"male": ["Alfie", "Archie", "Bandit", "Bear", "Bernie", "Blue", "Brody", "Buddy", "Chewie", "Clyde", "Ernie", "Fergus", "Figaro", "Finn", "Frankie", "Garfield", "Gatsby", "Gordo", "Grumpy Cat", "Heathcliff", "Jonesy", "Kirby", "Louie", "Max", "Meeko", "Miles", "Milo", "Monet", "Monty", "Mulligan", "Ole", "Opie", "Oscar", "Otis", "Percy", "Porkchop", "Rocky", "Romeo", "Ron Fleasley", "Scotter", "Simba", "Socks", "Spud", "Stewie", "Squirt", "Teddy", "Toby", "Willie", "Whiskers", "Yogi"],
			"female": ["Adele", "Amelie", "Babushka", "Bella", "Bertie", "Bindi", "Boo", "Cat Benetar", "Chloe", "Coco", "Cupcake", "Dolly", "Dora", "Ellie", "Emmie", "Gidget", "Gizmo", "Gracie", "Jelly Bean", "Kit", "Lilly", "Leelo", "Mabel", "Maisy", "Mimi", "Minnie", "Mittens", "Muffin", "Nala", "Nellie", "Nermal", "Kitty Purry", "Olive", "Patches", "Peanut", "Penny", "Polly", "Pookie", "Poppy", "Pearl", "Pumpkin", "Sophie", "Squirt", "Tessa", "Tina Spay", "Tootsie", "Trudy", "Waffles", "Whiskers", "Willow"]
		},

		html: '<div id="cat_container_featured" class="cat">\
					<h2>%name%</h2>\
					<div id="cat_image_aspect_ratio_trick">\
						<div id="cat_image" style="background-image: url(' + "'" + 'img/cat%imageIndex%.jpg' + "');" + '"></div>\
					</div>\
					<p id="click_container"><span class="click_counter">0</span> times</p>\
				</div>',

		"cats": [],

		Create: function Cat() {
			/*-----------------
			# Cat
			-----------------*/
			// this.HTML = model.cat.html;
			this.name;
			this.index = model.cat.cats.length;
			console.log(this.index + ", " + model.cat.cats.length);
			this.clicked = 0;
			this.url = 'img/cat' + this.index + '.jpg';


			if(Math.floor(Math.random() * 2) === 0) {
				// Male
				this.name = model.cat.names.male[Math.floor(Math.random() * model.cat.names.male.length)];// + "♂";
			} else {
				// Female
				this.name = model.cat.names.female[Math.floor(Math.random() * model.cat.names.female.length)];// + "♀";
			}

			// this.HTML = this.HTML.replace("%name%", this.name);

			// this.HTML = this.HTML.replace("%onclick%", "cats[" + index + "].click()");
			// this.HTML = this.HTML.replace("%index%", index);
			// this.HTML = this.HTML.replace("%imageIndex%", index);

			this.click = function() {
				this.clicked++;
				$(".click_counter" + index).text(this.clicked);
				$(".click_counter").text(this.clicked);
			}

			this.swapCat = function() {
				console.log("Swapping");
				$("#cat_image").css("background-image", "url('img/cat" + this.index + ".jpg')");
				$("#cat_container_featured").find("h2").html(this.name);
				$(".click_counter").html(this.clicked);

				model.cat.selected = this;
			}
		}
	},

	catList: {
		html: '<div class="listed_cat_container">\
					<div class="listed_cat_image" style="background-image: url(' + "'" + 'img/cat%imageIndex%.jpg' + "');" + '" onclick="%onclick%">\
						<h3 class="listed_cat_name">\
							%name%\
						</h3>\
						<p class="click_counter%index%">\
							0\
						</p>\
					</div>\
				</div>',
	}
};

var octopus = {
	init: function() {
		console.log("Octopus.init()");

		// Builds x cats
		for (var i = 0; i < model.cat.numberOfCats; i++) {
			model.cat.cats.push(new model.cat.Create());
		}

		// Set the current cat
		model.cat.selected = model.cat.cats[0];

		// Initialize the view functions|
		catView.init();
		catListView.init();
	},

	getCurrentCat: function() {
		return model.cat.selected;
	},

	getCats: function() {
		return model.cat.cats;
	},

	getCatListHtml: function() {
		return model.catList.html;
	},

	incrementClick: function() {
		this.getCurrentCat().clicked++;

		catView.updateCounter();
		catListView.updateCounter();
	}

};

var catView = {
	init: function() {
		console.log("CatView.init()");

		// Remove the "please enable javascript"-message
		$("#cat_image").html("");
		

		this.setCurrent(octopus.getCurrentCat());

		// Sets click event on current cat
		$("#cat_container_featured").click(function() {
			octopus.incrementClick();
		});
	},

	setCurrent: function(catObj) {
		$("#cat_container_featured").find("h2").html(catObj.name);
		$("#cat_image").css("background-image", "url('" + catObj.url + "')");
	},

	updateCounter: function() {
		var currentCat = octopus.getCurrentCat();
		$(".click_counter").text(currentCat.clicked);
	}
};

var catListView = {
	init: function() {
		var catList = $("#cat_list");
		console.log("CatListView.init()");

		cats = octopus.getCats();
		for(i = 0; i < cats.length; i++) {
			console.log(catList);
			var html = octopus.getCatListHtml();

			html = html.replace("%name%", cats[i].name);
			html = html.replace("%index%", cats[i].index);
			html = html.replace("%imageIndex%", cats[i].index);
			html = html.replace("%onclick%", "cats[" + cats[i].index + "].swapCat()");
			catList.append(html);
		}
	},

	updateCounter: function() {
		var currentCat = octopus.getCurrentCat();
		$(".click_counter" + currentCat.index).text(currentCat.clicked)
	}
};

octopus.init();