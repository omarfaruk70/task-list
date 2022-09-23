// define UI element
let inputForm = document.querySelector('#input-form');
let taskadd = document.querySelector('#newTask');
let taskFilter = document.querySelector('#task-filter');
let allTask = document.querySelector('ul');
let clearBtn = document.querySelector('#clearAll');

// add eventlistener
inputForm.addEventListener('submit', addTask);
allTask.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearAll)

// define function
function addTask(e){
    if(taskadd.value === ''){
        alert('Add a task')
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskadd.value + ' '));
        allTask.appendChild(li)
        let link = document.createElement('a');
        link.setAttribute('href', '#')
        link.innerHTML = 'X'
        li.appendChild(link)
        taskadd.value = '';
    }
    e.preventDefault();
};
function removeTask(e){
   if(e.target.hasAttribute('href')){
    let element = e.target.parentElement;
    element.remove();
   }
};
function clearAll(e) {
   if(confirm('Are you sure?')){
    allTask.innerHTML = '';    
}
};