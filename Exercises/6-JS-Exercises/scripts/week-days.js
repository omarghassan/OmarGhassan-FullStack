// Write a code to give the numbers their corresponding day name.

var num;
var dayName;
var dayStatus;

if (num == 1)
    dayName = "Sunday";
else if (num == 2)
    dayName = "Monday";
else if (num == 3) 
    dayName = "Tuesday";
else if (num == 4)
    dayName = "Wednesday";
else if (num == 5) 
    dayName = "Thursday";
else if (num == 6)
    dayName = "Friday";
else if (num == 7)
    dayName = "Saturday"

if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5) {
    dayStatus = "Week Day"
} else if (num == 6 || num == 7) {
    dayStatus = "Week End"
} else {
    dayStatus = "-1"
}

if (dayStatus == "-1") {
    console.log("The input you entered is invalid")
}


if (dayName == "-1") {
    console.log("The input you entered is invalid")
}

switch (day) {
    case 1: dayName = "Sunday"; console.log(dayName); break;
    case 2: dayName = "Monday"; console.log(dayName); break;
    case 3: dayName = "Tuesday"; console.log(dayName); break;
    case 4: dayName = "Wednesday"; console.log(dayName); break;
    case 5: dayName = "Thursday"; console.log(dayName); break;
    case 6: dayName = "Friday"; console.log(dayName); break;
    case 7: dayName = "Saturday"; console.log(dayName); break;
    default: dayName = "Invalid Value"; console.log(dayName);
}

if (dayName == "Invalid Value") {
    console.log("The input you entered is invalid")
}

switch (day) {
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: dayStatus = "Week Day"; console.log(dayStatus); break;
    case 6: 
    case 7: dayStatus = "Week End"; console.log(dayStatus); break;
    default: dayStatus = "Invalid Value"; console.log(dayStatus);
}

if (dayName == "Invalid Value") {
    console.log("The input you entered is invalid")
}