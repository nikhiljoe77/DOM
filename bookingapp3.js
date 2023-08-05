let userDetailsList = document.getElementById('userDetailsList');
window.addEventListener("DOMContentLoaded",()=>{
axios.get('https://crudcrud.com/api/9d1486e2a9be4fc8ae079f91cd17fb06/APPOINTMENTDATA')
.then((response) => {
  console.log(response)
  for(var i=0;i<response.data.length;i++)
  addUserDetailsToList(response.data[i])
  
})
.catch((err) => {
  console.log(err)
})
/*let userDetailsJSON = localStorage.getItem('userDetailsJSON');
let userDetails = userDetailsJSON ? JSON.parse(userDetailsJSON) : [];
if (userDetails.length!=0)
{
    for(let i=0;i<userDetails.length;i++)
addUserDetailsToList(userDetails[i])
}}*/
})
function submitForm(event) {
  event.preventDefault();

  let date = document.getElementById('date').value;
  let email = document.getElementById('email').value;
  let time = document.getElementById('time').value;
  let phone = document.getElementById('phone').value;
  let name = document.getElementById('name').value;

  // Create userDetails object
  let userDetails = {
    date: date,
    email: email,
    time: time,
    phone: phone,
    name: name
  };
  axios.post("https://crudcrud.com/api/9d1486e2a9be4fc8ae079f91cd17fb06/APPOINTMENTDATA", userDetails)
    .then((response) => {
      addUserDetailsToList(userDetails)
      //console.log(respone)
    })
    .catch((err) => {
      console.log(err)
    })
  // Store the userDetails JSON string in local storage
   /*let storedUserDetailsJSON = localStorage.getItem('userDetailsJSON');
   let storedUserDetails = storedUserDetailsJSON ? JSON.parse(storedUserDetailsJSON) : [];
 
   if (!Array.isArray(storedUserDetails)) {
     // If the data is not an array, initialize an empty array
     storedUserDetails = [];
   }
   storedUserDetails.push(userDetails);
    // Convert the userDetails object to a JSON string
    let userDetailsJSON = JSON.stringify(storedUserDetails);
 
   
   localStorage.setItem('userDetailsJSON', userDetailsJSON);
    
   // Add the userDetails object to the list
    addUserDetailsToList(userDetails);
 
   console.log('Submitted Data:');
   console.log('Date:', date);
   console.log('Email:', email);
   console.log('Time:', time);
   console.log('Phone:', phone);
   console.log('Name:', name);
 
   // Reset the form
   //document.getElementById('myForm').reset();*/
}


function addUserDetailsToList(userDetails) {
  // Create list item element
  let listItem = document.createElement('li');

  // Create paragraph element for displaying user details
  let detailsParagraph = document.createElement('p');
  detailsParagraph.textContent =
    'Name: ' +
    userDetails.name +
    ', Email: ' +
    userDetails.email +
    ', Phone: ' +
    userDetails.phone +
    ', Date: ' +
    userDetails.date +
    ', Time: ' +
    userDetails.time;

  // Create delete button element
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    // Handle delete button click event
    deleteUserDetails(userDetails, listItem);
  })
  // Create EDIT button element
  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function () {
    // Handle edit button click event
    editUserDetails(userDetails, listItem);
  });

  // Append the details paragraph,edit and delete button to the list item
  listItem.appendChild(detailsParagraph);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  // Append the list item to the user details list
  userDetailsList.appendChild(listItem);
}

function deleteUserDetails(userDetails, listItem) {

  // Retrieve the stored user details from local storage
  let storedUserDetailsJSON = localStorage.getItem('userDetailsJSON');
  if (storedUserDetailsJSON) {
    let storedUserDetails = JSON.parse(storedUserDetailsJSON);

    // Find the index of the user details to be deleted
    let index = -1;
    for (let i = 0; i < storedUserDetails.length; i++) {
      let item = storedUserDetails[i];
      if (
        item.name === userDetails.name &&
        item.email === userDetails.email &&
        item.phone === userDetails.phone &&
        item.date === userDetails.date &&
        item.time === userDetails.time
      ) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      // Remove the user details from the stored array
      storedUserDetails.splice(index, 1);

      // Update the local storage with the updated JSON string
      localStorage.setItem('userDetailsJSON', JSON.stringify(storedUserDetails));

      // Remove the list item from the user details list
      listItem.parentNode.removeChild(listItem);
    }
  }
}

function editUserDetails(userDetails, listItem) {
  // Populate the form fields with the user details
  document.getElementById('name').value = userDetails.name;
  document.getElementById('email').value = userDetails.email;
  document.getElementById('phone').value = userDetails.phone;
  document.getElementById('date').value = userDetails.date;
  document.getElementById('time').value = userDetails.time;
  deleteUserDetails(userDetails, listItem)
}


