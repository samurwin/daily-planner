// displayDate
var displayDate = function() {
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);
};

// colourCoded

// saveEvents

displayDate();