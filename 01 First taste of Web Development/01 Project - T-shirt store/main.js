(function () {
    // replace this line with your JavaScript code
	document.querySelector('#tshirt-creation-form').addEventListener('submit', createShirtFunction);
    
    function createShirtFunction(evt) {
        // prevent the form from submitting
        evt.preventDefault();

        // build and create shirt from form input
        myShop.createShirt();

        // clear the form so new shirts can be created
        this.reset();
    }

    function Shop(name) {
        this.name = name;
    }

    Shop.prototype = {
        addNewShirt: function (shirtColor, shirtName, shirtPrice) {
            // create the shirt <div> element and fill with the submitted data
            var shirtDiv = this.fillShirtTemplate(shirtColor, shirtName, shirtPrice);

            // get add the newly created shirt <div> to the page
            var shirtContainer = document.querySelector('#tshirt-container');
            shirtContainer.appendChild(shirtDiv);
        },
        fillShirtTemplate: function (color, name, price) {
            console.log('filling the shirt template with provided data');

            // set default values if form fields were left empty
            color = typeof color !== 'undefined' ? color : 'blue';
            name = typeof name !== 'undefined' ? name : 'My Amazing Shirt';
            price = typeof price !== 'undefined' ? price : 15;

            // create the shirt <div> element
            var shirtDiv = document.createElement('div');
            shirtDiv.classList.add('col', 's12', 'm6', 'l4');

            // fill the shirt <div> with all the HTML and submitted data
            shirtDiv.innerHTML = '<div class="card">' +
                '<div class="card-image">' +
                    '<img src="img/' + color + '.png" alt="' + name + ' shirt">' +
                '</div>' +
                '<div class="card-content">' +
                    '<h3 class="truncate">' + name + '</h3>' +
                    '<span>$' + (+price).toFixed(2) + '</span>' +
                    '</div>' +
                '<div class="card-action">' +
                    '<a href="#!">Add to cart</a>' +
                    '<div class="rating right">' +
                        '<i class="material-icons">star</i>' +
                        '<i class="material-icons">star</i>' +
                        '<i class="material-icons">star</i>' +
                  '</div>' +
                '</div>' +
            '</div>';

            return shirtDiv;
        },
        createShirt: function () {
            console.log('about to create a shirt!');

            // grab values from the page
            var shirtNode = document.querySelector('#tshirt-color');
            var shirtColor = shirtNode.options[shirtNode.selectedIndex].value || undefined;
            var shirtName = document.querySelector('#tshirt-name').value || undefined;
            var shirtPrice = document.querySelector('#tshirt-price').value || undefined;

            // create shirt and add it to the page
            this.addNewShirt(shirtColor, shirtName, shirtPrice);
        }
    };

    var myShop = new Shop('Udacity Shirts');
})();
