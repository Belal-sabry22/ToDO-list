const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputText = document.getElementById('inputText');
const clearToDo = document.getElementById('clearToDo');

addToDoButton.addEventListener('click',function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick',function(){
       toDoContainer.removeChild(paragraph); 
    });

    clearToDo.addEventListener('click',function(){
        paragraph.remove();
    })
 } )
 //local storage
 function showTasks();
 addToDoButton.onclick = () => {
     const userData = inputText.value; //gerring user entered value
     const getLocalStorage = localStorage.getItem('addToDo');
     if(getLocalStorage === null){ //if localstorage is null
        listArr = []; //creating blank array
     } else{
         listtArr= JSON.parse(getLocalStorage); //transforming json string into a js object
     }
     listArr.push(userData); //pushing or adding user data
     localStorage.setItem('addToDo', JSON.stringify(listArr)); //transforming js object into a json string
 }
 // function to add task list inside ul
 function showTasks(){
    const getLocalStorage = localStorage.getItem('addToDo');
    if(getLocalStorage === null){ //if localstorage is null
        listArr = []; //creating blank array
     } else{
         listtArr= JSON.parse(getLocalStorage); //transforming json string into a js object
     }
     const newLiTag = '';
     listArr.forEach((element, index) => {
        // newLiTag += '<li> $(element) <span><i class="new todo"></i></span></li>';
     });
     toDos.innerHTML= newLiTag; //adding new li tag inside ul tag
 }