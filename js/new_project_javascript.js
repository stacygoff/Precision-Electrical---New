//function for button Residential or Commercial at the bottom of the page//

function myFunction() {
    var text;
    var whatService = prompt("Which service do you need Commercial or Residential?");
    switch (whatService) {
        case "Residential":
            text = "Someone will be in touch soon";
            break;
        case "Commercial":
            text = "Someone will be in touch soon";
            break;
    }
    document.getElementById("demo").innerHTML = text;
};




// var visitor = prompt('How can I help you?')

// var message = 'welcome + to Precision Electrical Services';

// document.write(message);



// var visitor = prompt('How can I help you?')
// var message = 'welcome + to Precision Electrical Services';

// document.write(message);