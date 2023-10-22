const url='http://localhost:4000'
window.addEventListener("DOMContentLoaded",()=>{
  axios.get(`${url}/student`)
  .then((response) => {
    console.log(" i am the user",response)
    for(var i=0;i<response.data.length;i++)
    display(response.data[i])    
  })
  .catch((err) => {
    console.log(err)
  })
})

function display(attendance) {
  console.log("display is working ")
  console.log(attendance)
  //ul from attendance summary
  const itemsList = document.getElementById('itemsList');

  //using only 1 listitem or button is not good coz because basically it is overrideen by the second person,s data entered

  const kiranListItem = document.createElement('li');
  kiranListItem.className = 'list-group-item';

  const aryaListItem = document.createElement('li');
  aryaListItem.className = 'list-group-item';

  if (attendance.status1 === 'p') {
    kiranListItem.textContent = 'Kiran-present';
    const kiranTickButton = document.createElement('button');
    kiranTickButton.className = 'btn btn-success btn-sm float-right tick';
    kiranTickButton.textContent = '✓';
    kiranListItem.appendChild(kiranTickButton);
  } else {
    kiranListItem.textContent = 'Kiran-absent';
    const kiranCrossButton = document.createElement('button');
    kiranCrossButton.className = 'btn btn-danger btn-sm float-right delete';
    kiranCrossButton.textContent = 'X';
    kiranListItem.appendChild(kiranCrossButton);
  }

  if (attendance.status2 === 'p') {
    aryaListItem.textContent = 'Arya-present';
    const aryaTickButton = document.createElement('button');
    aryaTickButton.className = 'btn btn-success btn-sm float-right tick';
    aryaTickButton.textContent = '✓';
    aryaListItem.appendChild(aryaTickButton);
  } else {
    aryaListItem.textContent = 'Arya-absent';
    const aryaCrossButton = document.createElement('button');
    aryaCrossButton.className = 'btn btn-danger btn-sm float-right delete';
    aryaCrossButton.textContent = 'X';
    aryaListItem.appendChild(aryaCrossButton);
  }


  // Append the individual list items to the itemsList
  itemsList.appendChild(kiranListItem);
  itemsList.appendChild(aryaListItem);

}