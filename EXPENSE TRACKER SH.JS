// Retrieve stored expenses from localStorage or initialize an empty array
renderExpenseList()
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
var submitButton = document.getElementById('submitButton')
submitButton.addEventListener("click",addExpense)

// Function to add an expense
function addExpense() {
  const amountInput = document.getElementById('expenseamount');
  const descriptionInput = document.getElementById('description');
  const amount = amountInput.value;
  const description = descriptionInput.value; 
const expense = {
    amount,
    description
  };
  if(amount!='')
  {
  expenses.push(expense);
  saveExpensesToLocalStorage();
  }
  renderExpenseList();

  amountInput.value = '';
  descriptionInput.value = '';
}


// Function to save expenses to localStorage
function saveExpensesToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to render the expense list
  function renderExpenseList() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const itemsList = document.getElementById('items');
   // itemsList.innerHTML = ''; // Clear previous list items
  
    expenses.forEach((expense, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = `${expense.amount}-${expense.description}`;
  
      const deleteButton = document.createElement('button');
      deleteButton.className = 'btn btn-danger btn-sm float-right delete';
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => deleteExpense(index));
  
      const editButton = document.createElement('button');
      editButton.className = 'btn btn-primary btn-sm float-right edit';
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editExpense(index));
  
      listItem.appendChild(deleteButton);
      listItem.appendChild(editButton);
      itemsList.appendChild(listItem);
    });
  }
// Function to delete an expense
function deleteExpense(index) {
  //const index = expenses.findIndex(expense => expense.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
    saveExpensesToLocalStorage();
    renderExpenseList();
  }
}


//Function to edit an expense
function editExpense(index) 
{
  event.preventDefault()
  const submitbutton = document.getElementById('submitButton')
  const savebutton = document.getElementById('saveButton')
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  const amountInput = document.getElementById('expenseamount');
  const descriptionInput = document.getElementById('description');
  amountInput.value=expenses[index].amount;
  descriptionInput.value=expenses[index].description; 
   submitbutton.style.display="none"
   savebutton.style.display="block"

//const savebutton = document.getElementById('saveButton')
savebutton.addEventListener("click",()=>saveExpense(index))
}
function saveExpense(index)
{
  console.log('Index:', index)
  const expenses = JSON.parse(localStorage.getItem('expenses'))
  const amountInput = document.getElementById('expenseamount');
  const descriptionInput = document.getElementById('description') 
  expenses[index].amount=amountInput.value;
  expenses[index].description=descriptionInput.value; 
  console.log('Expense:', expenses[index]);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenseList();

}

  


