$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);

  });
  });

var leapYear = function(year) {
    return false;
  };

//jQuery user interface logic
var leapYear = function(year) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // jQuery user interface logic here.
  var leapYear = function(year) {
    if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  // jQuery user interface logic here.


  var leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0)) {
        return true;
      } else {
        return false;
      }
    };

    // jQuery user interface logic here.
