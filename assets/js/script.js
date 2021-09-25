// variable for the calendar container
var containerEl = document.querySelector(".container");

// empty array to hold the events
var events = [];

// displayDate at the top of the page
var displayDate = function() {
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);
};

// setInterval to check if an event is past, present or future every hour
setInterval (function(){
    colourCoded();
}, (1000 * 60) * 60);

// function to change colour of time blocks
var colourCoded = function() {
    // for each element with the id of .description
    $('.description').each(function() {
        // create variable for the time of the event
        var eventTime = $(this).attr("id");

        // create variable for current time
        var currentTime = moment().hour();

        // create conditional statement to change colour of textarea
        if (currentTime == eventTime) {
            $(this).removeClass();
            $(this).addClass("present col-10 description");
        } else if (currentTime > eventTime) {
            $(this).removeClass();
            $(this).addClass("past col-10 description");
        } else if (currentTime < eventTime) {
            $(this).removeClass();
            $(this).addClass("future col-10 description");
        }
    });
};

// create function to save events to the localStorage when the save button is clicked
$(".time-block").on("click", ".saveBtn", function() {
    // create an object for the event
    var eventTime = $(this)
    .closest(".time-block")
    .find(".description")
    .attr("id");

    var eventDescription = $(this)
    .closest(".time-block")
    .find(".description")
    .val()
    .trim();

    var savedEvent = {
        time: eventTime,
        description: eventDescription
    }
    console.log(savedEvent);
    // add the object to the events array
    events.push(savedEvent);
    console.log(events);
    // save the updated array to the localStorage
    saveEvent();
});

var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
};

// load the saved events to the page
var loadEvents = function() {
    var localStorageEvents = JSON.parse(localStorage.getItem("events"));


    // add each event to the page
    for (var i =0; i < localStorageEvents.length; i++) {
        console.log();
    var selectorId = localStorageEvents[i].time;
    
       document.getElementById(selectorId).value = localStorageEvents[i].description;
    }
};

loadEvents();
displayDate();
colourCoded();