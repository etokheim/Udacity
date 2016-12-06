'use strict';

(function (window) {
    window.addEventListener('message', runValidation);

    var feedback = [];
    var validateStep = [validateStep1, validateStep2, validateStep3, validateStep4, validateStep5, validateStep6, validateStep7];

    function runValidation(event) {
        var testsToRun;

        // console.log('got event', event.data); // contains lessonIndex, lessonName, type (which will be IDE/TEST_CODE)

        if (event.data.type !== 'IDE/TEST_CODE') {
            return;
        }

        console.log('about to validate steps. this step is', event.data.lessonIndex + 1);

        testsToRun = validateStep.slice(0, event.data.lessonIndex);
        testsToRun.map(function (validationFunc) {
            validationFunc();
        });

        if (feedback.length > 0 ) {
            alert(feedback.join('\n\n'));
        }
    }

    function validateStep1() {
        console.log('validating step 1');
        var heading = document.querySelectorAll('h1').length || null;

        if (! heading) {
            // alert("Seems like you didn't actually supply a heading");
            feedback.push("Seems like you didn't actually supply a heading in step 1.");
        }
    }

    function validateStep2() {
        console.log('validating step 2');
    }

    function validateStep3() {
        console.log('validating step 3');
        var numStylesheets = document.styleSheets.length || null;

        if (! numStylesheets) {
            feedback.push("Have you added the stylesheet? There don't seem to be any added to the page yet. Check out step 3");
        }
    }

    function validateStep4() {
        console.log('validating step 4');
    }

    function validateStep5() {
        console.log('validating step 5');
        var card = document.querySelector('.card');
        var results = window.getComputedStyle(card, null);

        if (results.padding === '0px') {
            feedback.push("There doesn't seem to be any padding added to the .card class. Why don't you check out step 5 and try adding it!");
        }
    }

    function validateStep6() {
        console.log('validating step 6');
        var form = document.querySelectorAll('form').length || null;

        if (! form) {
            feedback.push("Seems like you didn't actually add a form tag to the page. Check out step 6.");
            return;
        }

        var fieldColor = document.querySelector('#tshirt-color') || null;
        var fieldName = document.querySelector('#tshirt-name') || null;
        var fieldPrice = document.querySelector('#tshirt-price') || null;

        if (! (fieldColor && fieldName && fieldPrice)) {
            feedback.push("The form tag is great! Now make sure to add all the form fields correctly. Check out step 6.");
            return;
        }
    }

    function validateStep7() {
        console.log('validating step 7');
        var numberOfShirts = document.querySelectorAll('.card').length;

        if (numberOfShirts < 3) {
            feedback.push("You've hooked everything together, now add a shirt or two! Check out step 7 for more info.");
        }
    }

})(window);
