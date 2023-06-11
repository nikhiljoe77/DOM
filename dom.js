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
