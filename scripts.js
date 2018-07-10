$(document).ready(function() {
  $("form#leap-year").sumbit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    console.log(year);
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(year) {
    return false;
  };

//jQuery user interface logic
