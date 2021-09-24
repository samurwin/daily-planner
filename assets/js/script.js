// displayDate
var displayDate = function() {
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);
};

// colourCoded
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
        if (currentTime === eventTime) {
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

// saveEvents

displayDate();
colourCoded();