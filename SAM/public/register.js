var searchButton = document.getElementById('search')
var markattButton = document.getElementById('markAttendance')
markattButton.addEventListener("click", markatt)
const url='http://localhost:4000'
console.log(url)

function markatt() {
  event.preventDefault()
  const date = document.getElementById('date').value;
  const status1 = document.getElementById('student1_present').checked ? 'p' : 'a';
  const status2 = document.getElementById('student2_present').checked ? 'p' : 'a';
  const attendance = {
    date,
    status1,
    status2
  }
  axios.post(`http://localhost:4000/student`, attendance)
 window.location.href = '/summary';
  //axios.post(`${url}/register`, attendance)
  //display(attendance)
}
/*
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

}*/

/*
showattdate()
{
    event.preventdefault()
        console.log("addexpense is working")
        const expenseamount = document.getElementById('expenseamount').value;
        const description = document.getElementById('description').value;
      const expense = {
          expenseamount:expenseamount,
          description:description
        };
      console.log(expense.expenseamount)
      console.log(expense)
        if(expenseamount!='')
        {
        
        axios.post("http://localhost:4000/",expense)
        .then((response) => {
          renderExpenseList(expense)
          window.location.reload();
          console.log("render is working")
          console.log(response)
        })
        .catch((err) => {
          console.log("FAILED")
        })
        }
    
      }
    
}*/