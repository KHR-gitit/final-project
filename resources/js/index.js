const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const deleteTask = document.querySelector('#delete-task');

function getCurrentDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
   // document.write(today);
    return today;

}

addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
   
//Check if the Task Name input value is more than 5 characters.
if (taskName.value.length > 5) {
    taskName.classList.add('is-valid');
    taskName.classList.remove('is-invalid');
   } else {
    taskName.classList.add('is-invalid');
    taskName.classList.remove('is-valid');
}

if (assignedTo.value.length > 5) {
    assignedTo.classList.add('is-valid');
    assignedTo.classList.remove('is-invalid');
} else {
    assignedTo.classList.add('is-invalid');
    assignedTo.classList.remove('is-valid');
}

if (description.value.length > 5) {
    description.classList.add('is-valid');
    description.classList.remove('is-invalid');
} else {
    description.classList.add('is-invalid');
    description.classList.remove('is-valid');
}
if(dueDate.value == ""){
    dueDate.classList.add('is-invalid');
    dueDate.classList.remove('is-valid');
}else{
    dueDate.classList.add('is-valid');
    dueDate.classList.remove('is-invalid');
}

})











 