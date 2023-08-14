let electronicitems = document.getElementById('electronicitems');
let fooditems = document.getElementById('fooditems');
let skincareitems = document.getElementById('skincareitems');

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get('https://crudcrud.com/api/9b39d9bec19e454ba212e85ec1fc98f4/SALESPRODUCT');

        for (let i = 0; i < response.data.length; i++) {
            addSalesDetailsToList(response.data[i]);
        }
    } catch (err) {
        console.log(err);
    }
});

async function submitForm(event) {
    event.preventDefault();

    let sellingprice = document.getElementById('sellingprice').value;
    let productname = document.getElementById('productname').value;
    let category = document.getElementById('category').value;

    let salesDetails = {
        sellingprice: sellingprice,
        productname: productname,
        category: category,
    };

    console.log(salesDetails.sellingprice);

    try {
        const response = await axios.post("https://crudcrud.com/api/9b39d9bec19e454ba212e85ec1fc98f4/SALESPRODUCT", salesDetails);
        addSalesDetailsToList(salesDetails);
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}

function addSalesDetailsToList(salesDetails) {
    let listItem = document.createElement('li');
    listItem.textContent = `${salesDetails.sellingprice}-${salesDetails.category}-${salesDetails.productname}`;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async function () {
        await deleteUserDetails(salesDetails, listItem);
    });

    if (salesDetails.category === "Electronic Items") {
        electronicitems.appendChild(listItem);
    }
    if (salesDetails.category === "Food Items") {
        fooditems.appendChild(listItem);
    }
    if (salesDetails.category === "Skincare Items") {
        skincareitems.appendChild(listItem);
    }
    listItem.appendChild(deleteButton);
}

async function deleteUserDetails(userDetails, listItem) {
    try {
        await axios.delete(`https://crudcrud.com/api/9b39d9bec19e454ba212e85ec1fc98f4/SALESPRODUCT/${userDetails._id}`);
        listItem.parentNode.removeChild(listItem);
    } catch (err) {
        console.log(err);
    }
}