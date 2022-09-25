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
taskFilter.addEventListener('keyup', filtertask)
// define function
function addTask(add){
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
    add.preventDefault();
};
function removeTask(all){
   if(all.target.hasAttribute('href')){
    let element = all.target.parentElement;
    element.remove();
   }
};
function clearAll(clr) {
   if(confirm(' Opps! Are you sure?')){
    allTask.innerHTML = '';    
}
};
function filtertask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach((task)=>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block'
        }
        else{
            task.style.display = 'none'
        };
    })
};