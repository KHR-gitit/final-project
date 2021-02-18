const taskManager = require('../resources/js/taskManager');
const taskManagerObj = new taskManager();

const chai = require("chai");
const expect = chai.expect;
//const jsdom = require("jsdom");
const jsdom = require("../node_modules/jsdom");
const { JSDOM } = jsdom;

describe('TaskManager', ()=>{
  describe('#addTask', ()=>{
      it('Check if task is added',()=>{
        const obj = { id: 1,
                      name:"taskname",
                      description:"description",
                      assignedTo:'assignedTo',
                      dueDate:'12/02/2021',
                      status:'TODO'
                    };
        taskManagerObj.tasks.push(obj);

        expect(taskManagerObj.tasks[0]).to.be.an('object');
        expect(obj).to.be.an('object');
        expect(() => {taskManagerObj.tasks.length === 1}).to.not.throw();
        expect(taskManagerObj.tasks[0]).to.be.equal(obj);
      });

      it('Check for not empty array',()=>{
          expect(taskManagerObj.tasks).to.be.an('array').that.is.not.empty;
      });
      
    });
    describe('#taskDeleteBtn', ()=>{
      it('Check for specific object delete',()=>{
        taskManagerObj.tasks.push( 
                          { id: 3,
                          name:"taskname1",
                          description:"description1",
                          assignedTo:'assignedTo',
                          dueDate:'12/02/2021',
                          status:'TODO'},
                          {  id: 5,
                            name:"taskname2",
                            description:"description2",
                            assignedTo:'assignedTo',
                            dueDate:'12/02/2021',
                            status:'TODO'},
                            { id: 8,
                              name:"taskname3",
                              description:"description3",
                              assignedTo:'assignedTo',
                              dueDate:'12/02/2021',
                              status:'TODO'}
                          );
         
        for(let i = 0; i < taskManagerObj.tasks.length; i++) {
            if(taskManagerObj.tasks[i].id == 5){
              taskManagerObj.tasks.splice(i,1);
            }
        }
        expect(() => {taskManagerObj.tasks.length === 3}).to.not.throw();
        expect([taskManagerObj.tasks[0].id, 
                taskManagerObj.tasks[1].id,
                taskManagerObj.tasks[2].id]).not.contains(5);

      });
    });
    describe('#getTaskById', ()=>{
       it('Check if task returned is equal to expected task',()=>{
        let tempObj ={};
        for(let i = 0; i < taskManagerObj.tasks.length; i++) {
            if(taskManagerObj.tasks[i].id == 8){
              tempObj = taskManagerObj.tasks[i];
            }
        }
        expect(tempObj).to.be.equal(taskManagerObj.tasks[2]);
       });
    });

    describe('#render', ()=>{
      it('when tasks exist in the task manager',()=>{
         // Check out the documentation on github
         const dom = new JSDOM(
          `<html>
           <body>
           <ul id='listMenu'> Task List</ul>
           </body>
         </html>`,
          { url: "http://localhost" }
        );

        let ele=dom.window.document.querySelector('#listMenu').innerHTML;
       taskManagerObj.render();
        expect(ele).to.be.a('string','<li class="list-group-item border-0" id="1">');
        expect(ele).to.be.a('string','<div class="card-header  d-flex justify-content-between">');
      });
    });
 
})