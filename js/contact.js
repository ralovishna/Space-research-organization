let acount = {}; 
let emails = {}; 

document.getElementById('conAppointmentForm').addEventListener('submit', function(event) {
event.preventDefault(); 

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;
const purpose = document.getElementById('purpose').value;

if (!acount[date]) {
    acount[date] = 0; 
    emails[date] = []; 
}

// validate if time (9:00 AM to 4:00 PM)
const appointmentTime = new Date(`1970-01-01T${time}:00`);
const openingTime = new Date('1970-01-01T09:00:00');
const closingTime = new Date('1970-01-01T16:00:00');

if (appointmentTime < openingTime || appointmentTime > closingTime) 
    return openDBox("Visiting Hours!!!","Please select a time between 9:00 AM and 4:00 PM.");

// check if the email is younick..
if (emails[date].includes(email)) 
    return openDBox("Duplicate Email!!!", "This email has already been registered for an appointment on the selected date.");

// check if the appointment limit has been reached
if (acount[date] >= 5) 
    return openDBox("House Full!!!","We are fully booked for the selected date. Please choose a different date.");

// If all validations pass, update count and used emails for the date
acount[date] += 1;
emails[date].push(email);

console.log("Appointment Details \n Name:", name,"\n Email:", email, "\nPhone:", phone, "\nDate:", date, "\nTime:", time, "\nPurpose:", purpose);
openDBox("Appointment Submitted!","Your appointment has been successfully registered!");
});

function openDBox(title, message) {
    document.getElementById('dTitle').innerText = title;
    document.getElementById('dMessage').innerText = message;
    document.getElementById('dBox').style.display = "flex";
}

function closeDBox() {
    document.getElementById('dBox').style.display = "none";
}