function createTaskHtml(name, description, assignedTo, dueDate, status, id) {
  const html = `
  
        <li class="list-group-item" data-task-id ="${id}">
          <div class="card text-primary w-100 border-primary mb-3">
            <div class="card-header  d-flex justify-content-between">
              <div class="task-status">${status} <i class="bi bi-hourglass"></i> </div>
              <h5 class="card-title ">${name}</h5>
              <div class="assigned-to ">
                <h5 class="display-6 fs-5"> <i class="bi bi-person-square"></i> <b>${assignedTo}</b></h5>
              </div>
            </div>
            <div class="card-body">                
              <p class="card-text">${description}</p>
            </div>
            <div class="card-footer d-flex">
              <span class="date">${dueDate}</span>
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

function getDateInFormat(param) {
  var dd = String(param.getDate()).padStart(2, '0');
  var mm = String(param.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = param.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today;

}

//create the Task Manager class

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;

  }
  render() {
    let tasksHtmlList = [];

    for (let i = 0; i < this.tasks.length; i++) {
      let task1 = this.tasks[i];
      console.log(JSON.stringify(task1));

      let formattedDate = new Date(task1.dueDate).toLocaleDateString('en-AU');


      console.log(formattedDate);
      //String(task1.dueDate.getMonth()).padStart(2, '0') + '/'+
      //String(task1.getYear()).padStart(2, '0') 
      const taskHtml = createTaskHtml(task1.name, task1.description, task1.assignedTo, formattedDate, task1.status, task1.id);


      tasksHtmlList.push(taskHtml);


    }

    const tasksHtml = tasksHtmlList.join('\n');
    const tasksList = document.querySelector('.list-group');
    tasksList.innerHtml = '';
    tasksList.innerHTML = tasksHtml;


  }



  //addTask Method
  addTask(name, description, assignedTo, dueDate, status) {
    // create a task object that we will push to the list of tasks.
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status

    };
    console.log(task);
    this.tasks.push(task);
  }




  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i]
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }

}


