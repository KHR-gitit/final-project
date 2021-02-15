import TaskManager from '/taskManager.js';

//Initialize a new Task manager 
const taskManager = new TaskManager(); // do we need this?

// load already existing tasks from local storage.
taskManager.load();

const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const clearTask = document.querySelector('#clear-task');

const getDateInFormat = (param) => {
    let dd = String(param.getDate()).padStart(2, '0');
    let mm = String(param.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = param.getFullYear();

    let formatedDate = dd + '/' + mm + '/' + yyyy;
    return formatedDate;
}

// add event listner for submit form
addTaskForm.addEventListener('submit', e => {
   e.preventDefault();
   let valid=checkValid();
   if(valid){
        taskManager.addTaskLocal(taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        taskManager.addTaskDb(taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        taskManager.save();
        setTimeout(clearInputs,500);
        taskManager.render();
   }
})

const taskList = document.querySelector("#listMenu");

// add event listner on click of list menu
taskList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('task-done-btn')) {
        const parentTask = e.target.parentElement.parentElement.parentElement.parentElement;
        const taskId=parseInt(parentTask.id);
        const selectedTask = getTaskById(taskId);
        changeBtnText(selectedTask)
    }else if (e.target.classList.contains('task-delete-btn')) {
        let parentTask = e.target.parentElement.parentElement.parentElement.parentElement;
        const taskId=parseInt(parentTask.id);
        taskDeleteBtn(taskId);
        taskList.removeChild(parentTask);
    }
    taskManager.save();
})

// method to change the task status
const changeBtnText = (taskObj) => {
    if(taskObj.status === "To Do"){
        taskObj.status  =  'In Progress';
    }else if(taskObj.status === "In Progress"){
        taskObj.status  = "Review";
    }else if(taskObj.status === "Review"){
        taskObj.status  = "Done";
    }
    taskManager.render();
}

const checkValid = () => {
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
    if(dueDate.value !== "" 
                && getDateInFormat(new Date(dueDate.value)) !==  getDateInFormat(new Date())
                && getDateInFormat(new Date(dueDate.value)) >  getDateInFormat(new Date()) 
                ){
        dueDate.classList.add('is-valid');
        dueDate.classList.remove('is-invalid');
    }else{
        dueDate.classList.add('is-invalid');
        dueDate.classList.remove('is-valid');
        checkValidation+=1;
    }
    
    // return true only if all values are proper.
    if(checkValidation > 0){
        return false;
    }else{
        return true;
    }
}

const clearInputs = () => {
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
// method to clear form
clearTask.addEventListener( 'click', clearInputs());

// render the local storage tasks.
if(tasks != null){
    taskManager.render();
}

