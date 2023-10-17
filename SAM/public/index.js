
 // Function to switch between radio buttons and tick/cross elements
function switchToTickCross() {

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    for (const radio of radioButtons) {
        const tickCross = document.createElement('div');
        tickCross.className = 'tick-cross';

        if (radio.checked) {
            const icon = document.createElement('i');
            if (radio.value === 'present') {
                console.log("present")
                icon.className = 'fas fa-check';
                tickCross.style.backgroundColor = 'green';
                tickCross.style.color = 'white';
            } else if (radio.value === 'absent') {
                console.log("absent")
                icon.className = 'fas fa-times';
                tickCross.style.backgroundColor = 'red';
                tickCross.style.color = 'white';
            }
            tickCross.appendChild(icon);
        }

        const label = document.createElement('label');
        label.appendChild(tickCross);
        radio.parentElement.replaceWith(label);
    }
}

// Function to switch back to radio buttons
function switchToRadioButtons() {
    const tickCrosses = document.querySelectorAll('.tick-cross');
    for (const tickCross of tickCrosses) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = tickCross.firstChild.name;
        radio.value = tickCross.firstChild.value;

        if (tickCross.firstChild.classList.contains('fa-check')) {
            radio.checked = true;
        }

        tickCross.parentElement.replaceWith(radio);
    }
}

// Add event listener to the "Mark Attendance" button
document.getElementById('markAttendance').addEventListener('click', () => {
    if (document.querySelector('.tick-cross')) {
        // If tick-cross elements are present, switch to radio buttons
        switchToRadioButtons();
    } else {
        // Otherwise, switch to tick/cross elements
        switchToTickCross();
    }
});

// Function to fetch attendance report
function fetchAttendanceReport() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let totalClasses = checkboxes.length;
    let attendedClasses = 0;

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            attendedClasses++;
        }
    }

    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    alert(`Total Classes: ${totalClasses}\nAttended Classes: ${attendedClasses}\nAttendance Percentage: ${attendancePercentage.toFixed(2)}%`);
}

// Add event listeners to buttons

document.getElementById('fetchReport').addEventListener('click', fetchAttendanceReport);