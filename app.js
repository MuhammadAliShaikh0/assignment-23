// date method

// Q1
// document.write(new Date());

// Q2
// months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// date = new Date();
// Month = months[date.getMonth()];
// alert("Current Month: " +Month);

// Q3
// days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// currentDate = new Date();
// currentDay = days[currentDate.getDay()];
// alert("today is : " + currentDay);

// Q4
// currentDate = new Date();
// currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//     alert("It's Fun day");
// } else {
//     alert("It's not Fun day");
// }

// Q5
// currentDate = new Date();
// date = currentDate.getDate();

// if (date < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

// Q6
// currentDate = new Date ();
// pastDate = new Date (1970,0,1)
// minutes1970 = (currentDate - pastDate) / (1000 * 60);
// document.write(minutes1970)

// Q7
// currentDate = new Date();
// hours = currentDate.getHours();

// if (hours > 12) {
    // alert("Its AM");
// } else {
    // alert("Its PM");
// }

// Q8
// laterDate = new Date(2020, 12, 0);
// document.write(laterDate);

// Q9
// ramadanStart = new Date(2015, 5, 18);
// today = new Date();
// timeDiff = today.getTime() - ramadanStart.getTime();
// daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
// alert(daysDiff);

// Q10
// referenceDate = new Date("dec 5, 2015");
// date2015 = new Date("January 1, 2015")
// seconds = (referenceDate.getTime() - date2015.getTime()) / 1000;
// alert(seconds);

// Q11
// currentDate = new Date();
// hours = currentDate.getHours();
// time = hours - 1
// document.write("currentDate : "+currentDate + "<br> 1 hour ago it was :"+time);

// Q12
// currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);

// Q13
// age = prompt("Enter your age:");
// currentDate = new Date();
// currentYear = currentDate.getFullYear();
// birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);

// // Q14
// customerName = prompt("Enter Customer Name:");
// currentMonth = prompt("Enter Current Month:");
// numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
// chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
// latePaymentcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));
// netAmountPayable = numberOfUnits * chargesPerUnit;
// grossAmountPayable = netAmountPayable + latePaymentcharge;


// document.write("<h2>K-Electric Bill</h2>");
// document.write("<br>Customer Name: " + customerName);
// document.write("<br>Current Month: " + currentMonth);
// document.write("<br>Number of Units: " + numberOfUnits.toFixed(2));
// document.write("<br>Charges per Unit: " + chargesPerUnit.toFixed(2));
// document.write("<br>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2));
// document.write("<br>Late Payment Surcharge: " + latePaymentcharge.toFixed(2));
// document.write("<br>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));

// functions

// Q1
// document.write(new Date());

// Q2
// first = prompt("Enter first name")
// last = prompt("Enter last name")
// document.write("hello "+first +" "+last)

// Q3
// num1 = Number(prompt("Enter num1"))
// num2 = Number(prompt("Enter num2"))
// document.write(num1 + num2)

// Q4
// num1 = Number(prompt("Enter the first number:"));
// operator = prompt("Enter the operator:");
// num2 = Number(prompt("Enter the second number:"));


// if (operator === '+') {
//     document.write(num1 + num2)
// } else if (operator === '-') {
//     document.write(num1 - num2);
// } else if (operator === '*') {
//     document.write(num1 * num2);
// } else if (operator === '/') {
//     document.write(num1 / num2);
// } else {
//     document.write("Invalid operator");
// }

// date 31-34

// Q1
// dObj = new Date();

// Q2
// dObj = new Date();
// dStr = dObj.toString();

// Q3
// d = new Date();
// day = d.getDay();
// document.write(day)

// Q4
// dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// d = new Date();
// day = d.getDay();
// document.write(dayNames[day]);

// Q5
// d = new Date();
// month = d.getMonth();
// date = d.getDate();
// day = d.getDay();
// hours = d.getHours();
// minutes = d.getMinutes();
// seconds = d.getSeconds();
// milliseconds = d.getMilliseconds();

// Q6
// later = new Date(2020, 11, 31);

// Q7
// date = new Date(1992, 1, 2);

// Q8

// Q9
// date = new Date();
// date = new Date(date.getFullYear(), 0, 1);
// document.write(date);

// chap 30,31 switch

// Q1

// fruit = 'Apple';
// switch (fruit) {
//   case 'Apple':
//     document.write('Selected fruit is Apple');
//     break;
//   case 'Banana':
//     document.write('Selected fruit is Banana');
//     break;
//   case 'Orange':
//     document.write('Selected fruit is Orange');
//     break;
//   default:
//     document.write('No fruit selected');
// }

// Q2
cityName = prompt('Enter city name:');

switch (cityName.toLowerCase()) {
  case 'karachi':
    message = 'You entered Karachi.';
    break;
  case 'lahore':
    message = 'You entered Lahore.';
    break;
  case 'islamabad':
    message = 'You entered Islamabad.';
    break;
  default:
    message = 'City not recognized.';
}

alert(message);













