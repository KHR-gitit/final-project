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
    let statusBtn;
    if(status === 'To Do') {
        color = 'primary';
        icon = 'bi-hourglass';
        statusBtn = 'In progress';
    } else if(status === 'In progress') {
        color = 'success';
        icon = 'bi-gear-fill';
        statusBtn = 'Review';
    } else if(status === 'Review') {
        color = 'warning';
        icon = 'bi-check-all';
        statusBtn = 'Done';
    } else if(status === 'Done') {
        color = 'info';
        icon = 'bi-check2-square';
        statusBtn = 'Completed'
    }
    const html = `
                <li class="list-group-item border-0" id="${id}">
                    <div class="card text-${color} w-100 border-${color} mb-3">
                        <div class="card-header  d-flex justify-content-between">
                            <div class="task-status"> <i class="bi ${icon}">${status}</i></div>
                            <h5 class="card-title">${name}</h5>
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
                            <button class="btn btn-success task-status-btn">${statusBtn}</button>
                            <button class="btn btn-danger task-delete-btn">Delete</button>
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

getTaskId(taskId) {
    for(let i = 0; i < taskManager.tasks.length; i++) {
        if(taskManager.tasks[i].id === taskId) {
            return i;
        }
    }
}

changeTaskStatus(taskId) {
        let num = this.getTaskId(taskId);

        if(taskManager.tasks[num].status ==='To Do') {
            taskManager.tasks[num].status = 'In progress';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('text-primary');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('border-primary');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.remove('bi-hourglass');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.add('bi-gear-fill');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Review';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('text-success');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('border-success');
            statusBtn[taskId].innerHTML = 'Review';
            
        } else if(taskManager.tasks[num].status ==='In progress') {
            taskManager.tasks[num].status = 'Review';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('text-success');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('border-success');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.remove('bi-gear-fill');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.add('bi-check-all');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Done';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('text-warning');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('border-warning');
            statusBtn[taskId].innerHTML = 'Done';

        }else if(taskManager.tasks[num].status ==='Review') {
            taskManager.tasks[num].status = 'Done';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('text-warning');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.remove('border-warning');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.remove('bi-check-all');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].classList.add('bi-check2-square');
            statusBtn[taskId].parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerHTML = 'Completed';
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('text-info');
            statusBtn[taskId].parentElement.parentElement.parentElement.classList.add('border-info');
            statusBtn[taskId].innerHTML = 'Completed';
        }
}

taskDeleteBtn(taskId) {
    let num = this.getTaskId(taskId);
    taskManager.tasks.splice(num,num+1);
}


}


