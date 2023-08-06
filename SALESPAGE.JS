let electronicitems = document.getElementById('electronicitems');
let fooditems = document.getElementById('fooditems');
let skincareitems = document.getElementById('skincareitems');
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/08954b2eeeb541808ac7343b6144b936/SALESPRODUCT')
        .then((response) => {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                addSalesDetailsToList(response.data[i])
            }

        })
        .catch((err) => {
            console.log(err)
        })

})
function submitForm(event) {
    event.preventDefault();

    let sellingprice = document.getElementById('sellingprice').value;
    let productname = document.getElementById('productname').value;
    let category = document.getElementById('category').value;


    // Create salesDetails object
    let salesDetails = {
        sellingprice: sellingprice,
        productname: productname,
        category: category,
    };
    axios.post("https://crudcrud.com/api/08954b2eeeb541808ac7343b6144b936/SALESPRODUCT", salesDetails)
        .then((response) => {
            addSalesDetailsToList(salesDetails)
            window.location.reload();

        })
        .catch((err) => {
            console.log(err)
        })

}


function addSalesDetailsToList(salesDetails) {
    // Create list item element
    let listItem = document.createElement('li');

    listItem.textContent = `${salesDetails.sellingprice}-${salesDetails.category}-${salesDetails.productname}`
    // Create delete button element
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        // Handle delete button click event
        deleteUserDetails(salesDetails, listItem);
    })

    // Append the details paragraph,edit and delete button to the list item
    if (salesDetails.category == "Electronic Items") {
        electronicitems.appendChild(listItem)
    }
    if (salesDetails.category == "Food Items") {
        fooditems.appendChild(listItem)
    }
    if (salesDetails.category == "Skincare Items") {
        skincareitems.appendChild(listItem)
    }
    listItem.appendChild(deleteButton);

}

function deleteUserDetails(userDetails, listItem) {
    axios.delete(`https://crudcrud.com/api/08954b2eeeb541808ac7343b6144b936/SALESPRODUCT/${userDetails._id}`)
        .then((response) => {
            // Remove the list item from the user details list
            listItem.parentNode.removeChild(listItem);

        })
        .catch((err) => {
            console.log(err);
        });
}

