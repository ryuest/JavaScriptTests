// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    dayName = dayNames[new Date("2009/11/09").getUTCDay()];
    
    return dayName;
}

function main() {
   
        const date = 24/09/2019;
        
        console.log(getDayName(date));
    
}

main();