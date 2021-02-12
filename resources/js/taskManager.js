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
    let dNone;
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
        dNone = 'd-none'
    }
    const html = `
                <li class="list-group-item border-0" id="id-${id}">
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
                            <button class="btn btn-success task-status-btn ${dNone}">${statusBtn}</button>
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

getTaskId(taskId){
    for(let i = 0; i < taskManager.tasks.length; i++) {
        if(taskManager.tasks[i].id === taskId) {
            return i;
        }
    }
}

changeTaskStatus(taskId) {
    let box = document.querySelector(`#id-${taskId}`).childNodes[1];
    console.log(`this is the status change number: ${taskId}`)
        let num = this.getTaskId(taskId);
        console.log(`this is the status change number: ${num}`)
        if(taskManager.tasks[num].status ==='To Do') {
            taskManager.tasks[num].status = 'In progress';
            box.classList.remove('text-primary');
            box.classList.remove('border-primary');
            box.childNodes[1].childNodes[1].classList.remove('bi-hourglass');
            box.childNodes[1].childNodes[1].classList.add('bi-gear-fill');
            box.childNodes[1].childNodes[1].innerHTML = 'Review';
            box.classList.add('text-success');
            box.classList.add('border-success');
            box.childNodes[5].childNodes[3].childNodes[1].innerHTML = 'Review';
            
        } else if(taskManager.tasks[num].status ==='In progress') {
            taskManager.tasks[num].status = 'Review';
            box.classList.remove('text-success');
            box.classList.remove('border-success');
            box.childNodes[1].childNodes[1].classList.remove('bi-gear-fill');
            box.childNodes[1].childNodes[1].classList.add('bi-check-all');
            box.childNodes[1].childNodes[1].innerHTML = 'Done';
            box.classList.add('text-warning');
            box.classList.add('border-warning');
            box.childNodes[5].childNodes[3].childNodes[1].innerHTML = 'Done';

        }else if(taskManager.tasks[num].status ==='Review') {
            taskManager.tasks[num].status = 'Done';
            box.classList.remove('text-warning');
            box.classList.remove('border-warning');
            box.childNodes[1].childNodes[1].classList.remove('bi-check-all');
            box.childNodes[1].childNodes[1].classList.add('bi-check2-square');
            box.childNodes[1].childNodes[1].innerHTML = 'Completed';
            box.classList.add('text-info');
            box.classList.add('border-info');
            box.childNodes[5].childNodes[3].childNodes[1].classList.add('d-none');
        }
}

taskDeleteBtn(taskId) {
    let num = this.getTaskId(taskId);
    console.log(`this is the remove number: ${num}`)
    document.querySelector(`#id-${taskId}`).remove();
    taskManager.tasks.splice(num, 1);
}
}


