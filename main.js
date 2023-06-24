var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item1').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
   // Create span element for item name and description
   var span = document.createElement('span');
   span.appendChild(document.createTextNode(newItem + ' - ' + newItem1));
 
   // Append span to li
   li.appendChild(span);

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
  // Create edit button element
//var editBtn = document.createElement('button');
// Add classes to edit button
//editBtn.className = 'btn btn-primary btn-sm float-right edit';
// Append text node
//editBtn.appendChild(document.createTextNode('Edit'));
// Append button to li
//li.appendChild(editBtn);
 // console.log(1)
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
      var li = e.target.closest('li');
      itemList.removeChild(li);
      console.log(1)
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemText = item.textContent.toLowerCase();
    
    if (itemText.includes(text)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}