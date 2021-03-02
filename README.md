# final-project

#WireFrame
https://app.moqups.com/Eu3Vhgocnk/view/page/ac4a31c4f



#Descriptiion
Create a Task Planner web app from scratch.

#Technology
HTML, CSS, Bootstrap,JavaScript Local storage, Mocha and Chai for unit testing

#Licence
MIT licence added


1.Create wireframes of the Task Planner application using Moqups
 	- Contains a Task Form where the user inputs their tasks including the required information: Name, Description, AssignedTo, DueDate, Status
	-Contains a Task Layout (an individual card for each task the user adds) 

2.  Implement your Wireframes using Bootstrap and HTML
	- Create a new Github repo for the project folder ,includes index.html and styles.css
	-Add the selected bootstrap comnponents to the HTML page
	- Task planner form is implemented that contains :
	Name, Description, AssignedTo, DueDate,Status
  
3. Create a Task Card layout and a Task List Component
	-Implement the task card layout, basic structure of a card with task's information. 
	- Implementing a tasks list
	-Adding sample data
  
4. Task Form inputs validation
	-Implement a JavaScript function to validate your form fields- validFormFieldInput(data)
	-Add an ID attribute to each form field and get each form field value
	-Validation logic :
		Check if the Task Name input value is more than 5 characters.
		Check if the Task Description input value is more than 5 characters.
		Check if the Assigned To value is more than 5 characters.
		Check if the Task Due Date input value is not empty.
		Check if the Task Status input value is not empty.
    
5. Adding Tasks: Setup the TaskManager, create an addTask and hook it up to New Task form.
	 Create a class TaskManager to manage the tasks 
	Add a method on the class,addTask. This method should accept all the necessary information from the form to create a task as parameters.
	Within the addTask method, increment the this.currentId
	push a new task into the this.tasks array, with the correct properties of the task, using the values passed in as parameters as well as the new this.currentId
	Adding Tasks With The Form: 
	a. using the eventListener created for the form validation, create some logic to ensure the following events only happen if all the inputs are valid.
	b. When the submit event fires, call the taskManager's addTask method passing in your form's input.	

6. 	Display the tasks:
	create a function using template literals to return the HTML for each individual task.
	The render method: 
	To display the tasks, we'll create a new method on our TaskManager class called render.
	Create a variable tasksHtmlList and assign it an empty array. This will hold the HTML of all the tasks.
	Loop over the TaskManager's tasks, and for each task:
	push the taskHtml into the tasksHtmlList array.
	After looping through each task, create a new tasksHtml variable and set it to a string of HTML of all the tasks by joining the tasksHtmlList array together.
	Select the tasks list element and set its innerHTML to the tasksHtml
	Calling render
	render method() is called each time, a new task is added, so that it is rendered to the page.

7. Update a task
Add the Done button
adding an event listener to the Task List, instead of adding to Done button.
adding the task id to the DOM
Adding getTaskById to the TaskManager clas
 Update the status of the selected Task to 'Done'


8. Persisting Tasks to Local storage
Save tasks to the local storage, so that we can load them for another visit on the page.
Adding the save method to TaskManager
Adding the load method to TaskManager

9.  Deleting Tasks
Add A Delete Button to the Task HTML
Create the deleteTask Method on TaskManage
Setting an EventListener to the Delete Button on Tasks

10 Test TaskManager
Add Mocha to the project
Testing TaskManager Methods
