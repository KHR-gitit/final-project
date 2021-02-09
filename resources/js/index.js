const addTaskForm = document.querySelector('#add-task-form');
const taskName = document.querySelector('#task-name');
const assignedTo = document.querySelector('#assigned-to');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const taskStatus = document.querySelector('#status');
const deleteTask = document.querySelector('#delete-task');


addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
   
//Check if the Task Name input value is more than 5 characters.
if (taskName.value.length > 5) {
    console.log("Valid:Task Name is more than 5 characters")
   } else {
    console.log("Invalid:Task name has less than 5 Characters")

}

if (assignedTo.value.length > 5) {
    console.log("Valid:Task assigned to is more than 5 characters")
} else {
    console.log("Invalid:Task assigned to is less than 5 Characters")
}

if (description.value.length > 5) {
    console.log("Valid:Task description is more than 5 characters")
} else {
    console.log("Invalid:Task description is less than 5 Characters")
}

if (dueDate.value || dueDate !== Date.now() ) {
    console.log("Valid:Date is valid")
} else {
    console.log("Invalid:Date is invalid")
}

})








 