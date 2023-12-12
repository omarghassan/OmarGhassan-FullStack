var month;
var days;

// month = "May";
// month = "June";
// month = "February";

if (month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
    days = 31;
    console.log("Number of Days = " + days)
} else if (month == "February") {
    days = 28 || 29;
    console.log("Number of Days = " + days)
} else if (month == "April" || month == "June" || month == "September" || month == "November") {
    days = 30;
    console.log("Number of Days = " + days)
}