class TaskManager {
    constructor (currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    
    }

//addTask Method
addTask(name, description,assignedTo, dueDate, status) {

    const task = {
    id: this.currentId++,
    name: name,
    description: description,
    assignedTo:  assignedTo,
    dueDate: dueDate,
    status: status

};
this.tasks.push(task);

}
createTaskHtml(id, name, description, assignedTo, dueDate, status){
    let color;
    let icon;
    if(status === 'To Do') {
        color = 'primary';
        icon = 'bi-hourglass';
    } else if(status === 'In progress') {
        color = 'success';
        icon = 'bi-gear-fill';
    } else if(status === 'Review') {
        color = 'warning';
        icon = 'bi-check-all';
    } else if(status === 'Done') {
        color = 'info';
        icon = 'bi-check2-square';
    }
    const html = `
                <li class="list-group-item border-0" id="${id}">
                    <div class="card text-${color} w-100 border-${color} mb-3">
                    <div class="card-header  d-flex justify-content-between">
                        <div class="task-status"> <i class="bi ${icon}"></i>${status}</div>
                        <h5 class="card-title ">${name}</h5>
                        <div class="assigned-to ">
                        <h5 class="display-6 fs-5"> <i class="bi bi-person-square"></i> <b>${assignedTo}</b></h5>
                        </div>
                    </div>
                    <div class="card-body">                
                        <p class="card-text">${description}</p>
                    </div>
                    <div class="card-footer d-flex">
                        <span class="date">Due Date: ${getDateInFormat(new Date(dueDate))}</span>
                        <div class="button-box  ms-auto">
                        <button class="btn btn-success"> Done</button>
                        <button class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    </div>
                </li>
                 `
                 return html;
}

render() {
    const taskHtmlList = [];
    for(let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        taskHtmlList.push(this.createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.dueDate, task.status))
    }
    let taskHtml = taskHtmlList.join('\n');
    document.querySelector('#listMenu').innerHTML = taskHtml;
}




}

