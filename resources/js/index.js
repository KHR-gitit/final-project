
//Initialize a new Task manager 
const taskManager = new TaskManager();
let taskHtml = createTaskHtml('To do', 'Check the error in display','20/02/2021','Done','id');
console.log(taskHtml);

const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const clearTask = document.querySelector('#delete-task');






addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid=checkValid();
   if(valid){
        taskManager.addTask(taskName.value, description.value,assignedTo.value,dueDate.value,taskStatus.value);
        setTimeout(clearInputs,500);
        taskManager.render();
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
    let date1 = new Date(dueDate.value)
    let date2 = new Date();
    if(dueDate.value !== "" && date1 >  date2 ){
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

clearTask.addEventListener( 'click', clearInputs);
console.log('hello');
const taskListId = document.querySelector("#task-list");
console.log(taskListId);
taskListId.addEventListener('click', (event) => {
  console.log('inside click ' + event.target.classList);
  if (event.target.classList == "btn btn-success") {
    console.log("inside button click");
    
    const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement;
      console.log(parentTask);
    // Get the taskId of the parent Task and turn it into a number.
    const taskId = Number(parentTask.dataset.taskId);
    console.log(parentTask.dataset.taskId);
    // Get the task from the TaskManager using the taskId
    const task = taskManager.getTaskById(taskId);
    console.log(taskManager.getTaskById(0));
    // Update the task status to 'DONE'
    task.status = "Done";
    console.log(task.status);
    taskManager.render();
  }
})
