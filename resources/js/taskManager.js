const createTaskHtml = (id, taskName, description, assignedTo, dueDate, status) => {
    let color;
    let icon;
    let btnTxt = "Done";
    let btnLine="";
    if(status === 'To Do') {
        color = 'primary';
        icon = 'bi-hourglass';
        btnTxt = "In Progress";
        btnLine = `<button class="btn btn-success task-done-btn" > ${btnTxt}</button>`;
    } else if(status === 'In Progress') {
        color = 'success';
        icon = 'bi-gear-fill';
        btnTxt = "Review";
        btnLine = `<button class="btn btn-success task-done-btn" > ${btnTxt}</button>`;
    } else if(status === 'Review') {
        color = 'warning';
        icon = 'bi-check-all';
        btnTxt = "Done";
        btnLine = `<button class="btn btn-success task-done-btn" > ${btnTxt}</button>`;
    } else if(status === 'Done') {
        color = 'info';
        icon = 'bi-check2-square';
        btnTxt = "Complete";
        btnLine = `<button class="btn btn-success task-done-btn invisible" > ${btnTxt}</button>`;
    }
    const html = `
                <li class="list-group-item border-0" id="${id}">
                    <div class="card text-${color} w-100 border-${color} mb-3">
                    <div class="card-header  d-flex justify-content-between">
                        <div class="task-status"> <i class="bi ${icon}"></i>${status}</div>
                        <h5 class="card-title ">${taskName}</h5>
                        <div class="assigned-to ">
                        <h5 class="display-6 fs-5"> <i class="bi bi-person-square"></i> <b>${assignedTo}</b></h5>
                        </div>
                    </div>
                    <div class="card-body">                
                        <p class="card-text">${description}</p>
                    </div>
                    <div class="card-footer d-flex">
                        <span class="date">Due Date: ${getDateInFormat(new Date(dueDate))}</span>
                        <div class="button-box  ms-auto">  `+ btnLine+
                        `  <button class="btn btn-danger task-delete-btn">Delete</button>
                        </div>
                    </div>
                    </div>
                </li>`
                 return html;
}

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
    
    // display task
    render() {
        const taskHtmlList = [];
        for(let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            taskHtmlList.push(createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.dueDate, task.status))
        }
        let taskHtml = taskHtmlList.join('\n');
        document.querySelector('#listMenu').innerHTML = taskHtml;
    }

    // get the task object
    getTaskById(taskId){
        let foundTask ;
        for(let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if(task.id == taskId){
                foundTask = task;
            }
        }
        return foundTask; 
    }

    // to delete any task using splice 
    taskDeleteBtn(taskId) {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].id == taskId){
                this.tasks.splice(i,1);
            }
        }
    }

    // save the task to local storage.
    save(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
        localStorage.setItem('currentId',String(this.currentId));
    }

    // show task list from local storage
    load(){
        if(JSON.parse(localStorage.getItem("tasks")) === null || parseInt(localStorage.getItem('currentId')) === NaN ) {
            this.tasks = [];
            this.currentId = 0;
        } else {
            this.tasks= JSON.parse( localStorage.getItem('tasks'));
            this.currentId = parseInt(localStorage.getItem('currentId'));
        }
    }

}

