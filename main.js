var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter= document.getElementById('filter');
console.log(filter);

//form submit event
form.addEventListener('submit',addItem);
//Dlete event
itemList.addEventListener('click',removeItem);
//Filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e)
{
    e.preventDefault();
//console.log(1);

//get input element
var newItem = document.getElementById('item').value;
//console.log(newItem);

//create new element 
var li = document.createElement('li');
//console.log(li);
//add classname
li.className = 'list-group-item';
//console.log(li);
var value = document.createTextNode(newItem);
li.appendChild(value);
//console.log(li);
//itemList.appendChild(li);

var deleteBtn = document.createElement('button');
//console.log(deleteBtn);
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//append text node
var x = document.createTextNode('X');
//console.log(x);
deleteBtn.appendChild(x);
//console.log(deleteBtn);
//append button to li
li.appendChild(deleteBtn);
//console.log(li);
//append li to list
itemList.appendChild(li);
}
//Remeove Item 
function removeItem(e)
{
    //if(e.target.classList.contians('delete'))
        if (confirm('Are you sure?')){
            var li = e.target.parentElement;
            //console.log(li);
            itemList.removeChild(li);
        }
    
}
//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text)
    //GET lis
    var items = itemList.getElementsByTagName('li');
    //console.log(items);
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1)
        {
            item.style.display = ' block';
        }
        else
        {
            item.style.display = "none";
        }

    });
    
    
}
