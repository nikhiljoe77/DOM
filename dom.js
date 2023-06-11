console.dir(document)
console.log(document.domain)
console.log(document.URL)
console.log(document.title)
//document.title=123
var headerTitle=document.getElementById('header-title')
console.log(headerTitle)
var header=document.getElementById('main-header')
header.style.borderBottom='solid 3px  #000'
var addItemHeading = document.getElementById('main').getElementsByClassName('title')[0];
addItemHeading.style.fontWeight = 'bold';
addItemHeading.style.color = 'pink';
var listItems = document.getElementsByClassName('list-group-item');
var thirdElement = listItems[2];
thirdElement.style.backgroundColor ='green'
var listItems = document.getElementsByClassName('list-group-item');
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = 'bold';
}
var newLi = document.createElement('li');
newLi.innerText = 'Item 5';
newLi.classList.add('custom-class');
var list = document.getElementById('items');
list.appendChild(newLi);
var elementsByClassName = document.getElementsByClassName('custom-class');
var newLiByClassName = elementsByClassName[0];
newLiByClassName.style.backgroundColor ='green';
var elementsByTagName = document.getElementsByTagName('li');
var newLiByTagName = elementsByTagName[elementsByTagName.length - 1];
newLiByTagName.style.fontWeight ='bold';
var secondItem = document.querySelector('#items li:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('#items li:nth-child(3)');
thirdItem.style.display = 'none'