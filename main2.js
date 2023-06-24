var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItemName = document.getElementById('item').value;
  var newItemDescription = document.getElementById('itemDescription').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  // Create item name element
  var itemName = document.createElement('div');
  // Add class
  itemName.className = 'item-name';
  // Add text node with input value
  itemName.appendChild(document.createTextNode(newItemName));
  // Append item name to li
  li.appendChild(itemName);

  // Create item description element
  var itemDescription = document.createElement('div');
  // Add class
  itemDescription.className = 'item-description';
  // Add text node with input value
  itemDescription.appendChild(document.createTextNode(newItemDescription));
  // Append item description to li
  li.appendChild(itemDescription);

  // Create del button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear the input fields
  document.getElementById('item').value = '';
  document.getElementById('itemDescription').value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.querySelector('.item-name').textContent.toLowerCase();
    var itemDescription = item.querySelector('.item-description').textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1 || itemDescription.indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}