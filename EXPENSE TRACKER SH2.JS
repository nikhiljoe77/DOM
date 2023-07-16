// Retrieve stored expenses from localStorage or initialize an empty array
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to add an expense
function addExpense(event) {
  event.preventDefault();

  const amountInput = document.getElementById('expenseamount');
  const descriptionInput = document.getElementById('description');

  const amount = parseInt(amountInput.value);
  const description = descriptionInput.value;

  if (isNaN(amount) || description.trim() === '') {
    console.log('Please enter a valid expense amount and description.');
    return;
  }

  const expense = {
    id: Date.now(),
    amount,
    description
  };

  expenses.push(expense);
  saveExpensesToLocalStorage();
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
  const itemsList = document.getElementById('items');
  itemsList.innerHTML = '';

  for (const expense of expenses) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${expense.amount} - ${expense.description}`;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => deleteExpense(expense.id));

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right edit';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editExpense(expense.id));

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    itemsList.appendChild(listItem);
  }
}

// Function to delete an expense
function deleteExpense(id) {
  const index = expenses.findIndex(expense => expense.id === id);
  if (index !== -1) {
    expenses.splice(index, 1);
    saveExpensesToLocalStorage();
    renderExpenseList();
  }
}

// Function to edit an expense
function editExpense(id) {
  const index = expenses.findIndex(expense => expense.id === id);
  const expense = expenses[index];

  // Populate the form fields with existing data
  const amountInput = document.getElementById('expenseamount');
  const descriptionInput = document.getElementById('description');
  amountInput.value = expense.amount;
  descriptionInput.value = expense.description;

  const saveButton = document.getElementById('submitButton');

  // Update the click event listener of the submit button to handle the edit operation
  saveButton.removeEventListener('click', addExpense); // Remove the previous event listener
  saveButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Update the existing expense with modified data
    expense.amount = parseInt(amountInput.value);
    expense.description = descriptionInput.value;

    // Save the modified expenses and re-render the expense list
    saveExpensesToLocalStorage();
    renderExpenseList();

    // Clear the form fields
    amountInput.value = '';
    descriptionInput.value = '';

    // Re-attach the event listener for adding expenses
    saveButton.removeEventListener('click', arguments.callee);
    saveButton.addEventListener('click', addExpense);
  });
}

// Attach event listener to the form submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', addExpense);

// Initial rendering of the expense list
renderExpenseList();