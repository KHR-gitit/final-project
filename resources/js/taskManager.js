class TaskManager {
    constructor (currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    
    }

//addTask Method
addTask(name, description,assignedTo, dueDate,status) {

    const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assignedTo:  assignedTo,
    dueDate: dueDate,
    status: status

};
console.log('TaskManager')
this.tasks.push(task);
}

}

