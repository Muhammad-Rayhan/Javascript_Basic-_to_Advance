var date = new Date();
console.log(date); // Print Date or Time 2022-09-09T09:06:41.178Z
console.log(date.toDateString()); // Print Date in String Formate Fri Sep 09 2022
console.log(date.toTimeString()); // Print Time in String Formate 15:06:41 GTM+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()); // Print Local Date or Time 9/9/2022, 3:06:41 PM
console.log(date.toLocaleDateString()); // Print Local Date 9/9/2022
console.log(date.toLocaleTimeString()); // Print Local Time Zone 3:06:41 PM
console.log(date.getFullYear()); // Print Only Year 2022
console.log(date.getMonth()); // Print Only Month 8 (Note: Month Start will Be 0)
console.log(date.getDate()); // Print Only Date 9
console.log(date.getHours()); // Print Only Hours (0-23)
console.log(date.getMinutes()); // Print Only Minutes (0-59)
console.log(date.getSeconds()); // Print Only Second (0-59)
console.log(date.getMilliseconds()); // Print Only Millisecond (0-999)
console.log(date.getDay()); // Print The Weekday As a Number (0-6)
console.log(date.getTime()); // Print The Time (milliseconds since January 1, 1970)