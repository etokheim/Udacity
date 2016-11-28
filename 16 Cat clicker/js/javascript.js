var ViewModel = function() {
	var that = this;

	this.names = {
		male: ["Alfie", "Archie", "Bandit", "Bear", "Bernie", "Blue", "Brody", "Buddy", "Chewie", "Clyde", "Ernie", "Fergus", "Figaro", "Finn", "Frankie", "Garfield", "Gatsby", "Gordo", "Grumpy Cat", "Heathcliff", "Jonesy", "Kirby", "Louie", "Max", "Meeko", "Miles", "Milo", "Monet", "Monty", "Mulligan", "Ole", "Opie", "Oscar", "Otis", "Percy", "Porkchop", "Rocky", "Romeo", "Ron Fleasley", "Scotter", "Simba", "Socks", "Spud", "Stewie", "Squirt", "Teddy", "Toby", "Willie", "Whiskers", "Yogi"],
		female: ["Adele", "Amelie", "Babushka", "Bella", "Bertie", "Bindi", "Boo", "Cat Benetar", "Chloe", "Coco", "Cupcake", "Dolly", "Dora", "Ellie", "Emmie", "Gidget", "Gizmo", "Gracie", "Jelly Bean", "Kit", "Lilly", "Leelo", "Mabel", "Maisy", "Mimi", "Minnie", "Mittens", "Muffin", "Nala", "Nellie", "Nermal", "Kitty Purry", "Olive", "Patches", "Peanut", "Penny", "Polly", "Pookie", "Poppy", "Pearl", "Pumpkin", "Sophie", "Squirt", "Tessa", "Tina Spay", "Tootsie", "Trudy", "Waffles", "Whiskers", "Willow"]
	};

	this.incrementCounter = function() {
		// that.currentCat().clickCount(that.currentCat().clickCount() + 1);
		this.determineLevel();
		this.clickCount(this.clickCount() + 1);
	};

	this.lastGender;
	this.getGender = function() {
		if(Math.floor(Math.random() * 2) === 0) {
			that.lastGender = "male";
			return "male";
		} else {
			that.lastGender = "female";
			return "female";
		}
	};

	this.getName = function() {
		if(that.lastGender === "male") {
			// Male
			return that.names.male[Math.floor(Math.random() * that.names.male.length)];// + "♂";
		} else {
			// Female
			return that.names.female[Math.floor(Math.random() * that.names.female.length)];// + "♀";
		}
	};

	this.cats = ko.observableArray();

	this.amountOfCats = 12;
	for(var i = 0; i < this.amountOfCats; i++) {
		this.cats.push(ko.observable(new Cat({
			clickCount: 0,
			gender: that.getGender(),
			name: that.getName(),
			url: "img/cat" + this.cats().length + ".jpg",
		})));
	}

	this.currentCat = ko.observable(this.cats()[0]);

	this.setCat = function(clickedCat) {
		that.currentCat(clickedCat);
	};
};

ko.applyBindings(new ViewModel());

function Cat(data) {
	this.clickCount = ko.observable(data.clickCount);

	this.gender = data.gender;

	this.level = ko.observable('');

	this.determineLevel = function() {
		if(this.clickCount() < 10) {
			this.level("New born");
		} else if(this.clickCount() < 50) {
			this.level("Infant");
		} else if(this.clickCount() < 100) {
			this.level("Teen");
		} else if(this.clickCount() < 200) {
			this.level("Young adult");
		} else if(this.clickCount() < 300) {
			this.level("Adult");
		} else if(this.clickCount() < 400) {
			this.level("Super adult");
		} else if(this.clickCount() < 500) {
			this.level("Mega adult");
		}
	};

	this.determineLevel();

	this.name = ko.observable(data.name);
	this.nameAndLevel = ko.computed(function() {
		return this.name() + " - " + this.level();
	}, this);

	this.imgSrc = data.url;
}
