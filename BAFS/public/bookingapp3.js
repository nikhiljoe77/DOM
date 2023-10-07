let userDetailsList = document.getElementById('userDetailsList');
window.addEventListener("DOMContentLoaded",()=>{
axios.get("http://localhost:3000/")
.then((response) => {
  console.log(" i am the user",response)
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

  
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let username = document.getElementById('username').value;

  // Create userDetails object
  let userDetails = {
   
    email: email,   
    phone: phone,
    username: username
  };
  console.log(userDetails)
  axios.post("http://localhost:3000/", userDetails)
    .then((response) => {
      addUserDetailsToList(userDetails)
      window.location.reload();
      console.log(response)
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
    userDetails.username +
    ', Email: ' +
    userDetails.email +
    ', Phone: ' +
    userDetails.phone;
   
    
  // Create delete button element
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function () {
    // Handle delete button click event
    deleteUserDetails(userDetails,listItem);
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
console.log("i am appending", listItem)
  // Append the list item to the user details list
  userDetailsList.appendChild(listItem);
}

function deleteUserDetails(userDetails,listItem) {
  axios.delete(`http://localhost:3000/${userDetails.id}`)
  .then((response) => {
    // Remove the list item from the user details list
    listItem.parentNode.removeChild(listItem);
    
  })
  .catch((err) => {
    console.log(err);
  });

  /*// Retrieve the stored user details from local storage
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
  }*/
}

function editUserDetails(userDetails, listItem) {
  // Populate the form fields with the user details
  document.getElementById('username').value = userDetails.username;
  document.getElementById('email').value = userDetails.email;
  document.getElementById('phone').value = userDetails.phone;

  axios.delete(`http://localhost:3000/${userDetails.id}`)
  .then((response) => {
    // Remove the list item from the user details list
    listItem.parentNode.removeChild(listItem);
  })
  .catch((err) => {
    console.log(err);
  });/*
    // Populate the form fields with the user details
    let updatedName = document.getElementById('name').value;
    let updatedEmail = document.getElementById('email').value;
    let updatedPhone = document.getElementById('phone').value;
    let updatedDate = document.getElementById('date').value;
    let updatedTime = document.getElementById('time').value;
  
    let updatedUserDetails = {
      name: updatedName,
      email: updatedEmail,
      phone: updatedPhone,
      date: updatedDate,
      time: updatedTime
    };
    setTimeout(()=>
    {
  axios.put(`http://127.0.0.1:3000/${userDetails._id}`,updatedUserDetails)
  .then((response) => {
    // Remove the list item from the user details list
    let detailsParagraph = listItem.querySelector('p');
    detailsParagraph.textContent =
      'Name: ' +
      updatedName +
      ', Email: ' +
      updatedEmail +
      ', Phone: ' +
      updatedPhone +
      ', Date: ' +
      updatedDate +
      ', Time: ' +
      updatedTime;
  })
  .catch((err) => {
    console.log(err);
  })
},50000)
 // deleteUserDetails(userDetails, listItem)*/
}


