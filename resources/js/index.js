
import TaskManager from './taskManager.js';

//Initialize a new Task manager 
const taskManager = new TaskManager(0);
taskManager.getDataFromLocalStorage();

const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const clearTask = document.querySelector('#clear-task');
const taskList = document.querySelector("#listMenu");
const submitBtn = document.querySelector('#submit-task');

// add event listner for submit form
addTaskForm.addEventListener('submit', e => {
   e.preventDefault();
   let valid=checkValid();
   if(valid){
       if(submitBtn.innerHTML === "Submit"){
            taskManager.addTask(taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        }else{
            taskManager.editTask(selectedId,taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        }
        setTimeout(clearInputs,500);
        submitBtn.innerHTML = "Submit";
        selectedId="";
        taskManager.render();
        taskManager.setDataToLocalStorage();
   }
})

// add event listner on click of list menu
taskList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('task-done-btn')) {
        const parentTask = e.target.parentElement.parentElement.parentElement.parentElement;
        const taskId=parseInt(parentTask.id);
        const selectedTask = taskManager.getTaskById(taskId);
        changeBtnText(selectedTask)
        taskManager.setDataToLocalStorage();
    }else if (e.target.classList.contains('task-delete-btn')) {
        let parentTask = e.target.parentElement.parentElement.parentElement.parentElement;
        const taskId=parseInt(parentTask.id);
        taskManager.taskDeleteBtn(taskId);
        taskList.removeChild(parentTask);
        taskManager.setDataToLocalStorage();
    }else if(e.target.classList.contains('task-edit-btn')){
        let parentTask = e.target.parentElement.parentElement.parentElement.parentElement;
        const taskId=parseInt(parentTask.id);
        const selectedTask = taskManager.getTaskById(taskId);
        viewForm(selectedTask);
    }
})

let selectedId="";
//method to render task on form
const viewForm =(taskObj) => {
    selectedId=taskObj.id;  
    taskName.value = taskObj.name;
    description.value =taskObj.description;
    assignedTo.value= taskObj.assignedTo;
    dueDate.value =taskObj.dueDate;
    taskStatus.value = taskObj.status;
    submitBtn.innerHTML = "Update";
    document.querySelector('#collapseId').setAttribute('aria-expanded',"true");
    document.querySelector('#collapseId').classList.remove('collapsed');
    document.querySelector('#collapseExample').classList.add('show');
    taskName.focus();
}

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
              //  && new Date(dueDate.value) ==  new Date()
                && new Date(dueDate.value) >  new Date() 
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

// reset the form
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
if(taskManager.tasks !== null) {
    taskManager.render();
}