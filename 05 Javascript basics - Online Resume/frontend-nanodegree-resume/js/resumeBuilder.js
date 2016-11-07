var work = {
	"jobs": [
		{
			"employer": "Norske landbrukstenester",
			"title": "Avløysar",
			"dates": "2011-2012",
			"description": "J sdfj asdf sd jasdfjlas df asd fjljwel afs dlfjqwelj",
			"location": "Laupsa"
		},

		{
			"employer": "Coop Norway",
			"title": "Co worker",
			"dates": "2010-2010",
			"description": "J sdfj asdf sd jasdfjlas df asd fjljwel afs dlfjqwelj",
			"location": "Øystese"
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Web design project",
			"dates": "2016",
			"description": "This project was very cool!",
			"images": ["https://s-media-cache-ak0.pinimg.com/236x/5e/e6/95/5ee695e34856d22c2538a22133f3f4e8.jpg"]
		}
	]
}

var bio = {
	"contacts": {
		"location": "Oslo"
	}
}

var education = {
	"schools": [
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Generell studiekompetanse",
			"major": "None",
			"location": "Lundeneset vidaregåande skule"
		},
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Media and communication",
			"major": "None",
			"location": "Lundeneset vidaregåande skule"
		}
	]
}


function displayHeader() {

	var formattedHeaderName = HTMLheaderName.replace("%data%", "Erling Tokheim");
	$("#header").append(formattedHeaderName);
}

function displayWork() {
	for(job in work.jobs) {
		// create new div for work experiences
		$("#workExperience").append(HTMLworkStart);

		// Concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.clientX, loc.clientY);
});

function logClicks(x, y) {
	console.log(x, y);
}


function locationizer(workObj) {
	var arrayOfJobs = [];
	for (job in work.jobs) {
		arrayOfJobs.push(work.jobs[job].location);
	}

	return arrayOfJobs;
}

locationizer(work);

projects.display = function() {
	for(project in projects.projects) {
		// create new div for work experiences
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

// var location = ["Oslo", "Sidney", "Andorra"];
$("#mapDiv").append(googleMap);
initializeMap();

// pinPoster({"locations": ["Oslo", "Sidney", "Andorra"]});