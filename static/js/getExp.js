function getExp(){
    let currentDate = new Date();

// Add 6 months to current date
currentDate.setMonth(currentDate.getMonth() + 6);

// Get month name
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = monthNames[currentDate.getMonth()];

// Get year
let year = currentDate.getFullYear().toString().slice(-2);

// Concatenate month and year in desired format
let expirationDate = `${month} ${year}`;
return(expirationDate)
}

module.exports=getExp