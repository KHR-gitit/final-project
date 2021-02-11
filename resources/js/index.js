
//Initialize a new Task manager 
const taskManager = new TaskManager();

const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const clearTask = document.querySelector('#delete-task');
let statusBtn = document.querySelectorAll('.task-status-btn');
let taskDeleteBtn = document.querySelectorAll('.task-delete-btn');





addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid=checkValid();
   if(valid){
        taskManager.addTask(taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        setTimeout(clearInputs,500);
        taskManager.render();
        addEventListenerToChangeStatusBtn();
        addEventListenerToDeleteBtn();
   }
})

function checkValid(){
    let checkValidation =0;
    //Check if the Task Name input value is more than 5 characters.
    if (taskName.value.length > 5) {
        taskName.classList.add('is-valid');
        taskName.classList.remove('is-invalid');
    } else {
        taskName.classList.add('is-invalid');
        taskName.classList.remove('is-valid');
        checkValidation+=1;
    }
    //Check if the assignesTo input value is more than 5 characters
    if (assignedTo.value.length > 5) {
        assignedTo.classList.add('is-valid');
        assignedTo.classList.remove('is-invalid');
    } else {
        assignedTo.classList.add('is-invalid');
        assignedTo.classList.remove('is-valid');
        checkValidation+=1;
    }
    //check if the description is more than 5 characters
    if (description.value.length > 5) {
        description.classList.add('is-valid');
        description.classList.remove('is-invalid');
    } else {
        description.classList.add('is-invalid');
        description.classList.remove('is-valid');
        checkValidation+=1;
    }
    
    // Check for the valid dueDate

    if(dueDate.value !== "" && new Date(dueDate.value) >  new Date() ){
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
    }else{
        dueDate.classList.add('is-invalid');
        dueDate.classList.remove('is-valid');
        checkValidation+=1;
    }
    
    if(checkValidation > 0){
        return false;
    }else{
        return true;
    }
}


clearTask.addEventListener( 'click', clearInputs);


function addEventListenerToChangeStatusBtn() {
    statusBtn = document.querySelectorAll('.task-status-btn')
    taskDeleteBtn = document.querySelectorAll('.task-delete-btn');
    for(let i = 0; i < statusBtn.length; i++) {
        statusBtn[i].addEventListener('click', () => {
            let taskId = statusBtn[i].parentElement.parentElement.parentElement.parentElement.id;
            taskManager.changeTaskStatus(parseInt(taskId));
        })
    }
}


function addEventListenerToDeleteBtn() {
    for(let i = 0; i < taskDeleteBtn.length; i++) {
        taskDeleteBtn[i].addEventListener('click', () => {
            let taskId = taskDeleteBtn[i].parentElement.parentElement.parentElement.parentElement.id;
            taskManager.taskDeleteBtn(parseInt(taskId));
            taskDeleteBtn[i].parentElement.parentElement.parentElement.parentElement.remove();

        })
    }
}




 








function clearInputs () {
    taskName.value = '';
    assignedTo.value = '';
    description.value = '';
    dueDate.value = '';
    taskStatus.value = 'To Do';
    taskName.classList.remove('is-valid');
    taskName.classList.remove('is-invalid');
    assignedTo.classList.remove('is-valid');
    assignedTo.classList.remove('is-invalid');
    dueDate.classList.remove('is-valid');
    dueDate.classList.remove('is-invalid');
    description.classList.remove('is-invalid');
    description.classList.remove('is-valid');
}
function getDateInFormat(param){
    let dd = String(param.getDate()).padStart(2, '0');
    let mm = String(param.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = param.getFullYear();

    let formatedDate = dd + '/' + mm + '/' + yyyy;
    return formatedDate;
}