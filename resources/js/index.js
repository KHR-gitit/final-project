const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const deleteTask = document.querySelector('#delete-task');


addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`Task : ${taskName.value};`);
    console.log(`Assigned to : ${assignedTo.value};`);
    console.log(`Description : ${description.value};`);
    console.log(`Due date : ${dueDate.value};`);
    console.log(`Status : ${taskStatus.value};`);
})