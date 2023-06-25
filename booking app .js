// JavaScript code
var userDetailsList = document.getElementById('userDetailsList');

function submitForm(event) {
  event.preventDefault();

  var date = document.getElementById('date').value;
  var email = document.getElementById('email').value;
  var time = document.getElementById('time').value;
  var phone = document.getElementById('phone').value;
  var name = document.getElementById('name').value;

  // Create userDetails object
  var userDetails = {
    date: date,
    email: email,
    time: time,
    phone: phone,
    name: name
  };

  // Add the userDetails object to the list
  addUserDetailsToList(userDetails);

  console.log('Submitted Data:');
  console.log('Date:', date);
  console.log('Email:', email);
  console.log('Time:', time);
  console.log('Phone:', phone);
  console.log('Name:', name);

  // Reset the form
  document.getElementById('myForm').reset();
}

function addUserDetailsToList(userDetails) {
  // Create list item element
  var listItem = document.createElement('li');

  // Create paragraph element for displaying user details
  var detailsParagraph = document.createElement('p');
  detailsParagraph.textContent = 'Name: ' + userDetails.name + ', Email: ' + userDetails.email + ', Phone: ' + userDetails.phone + ', Date: ' + userDetails.date + ', Time: ' + userDetails.time;

  // Append the details paragraph to the list item
  listItem.appendChild(detailsParagraph);

  // Append the list item to the user details list
  userDetailsList.appendChild(listItem);
}