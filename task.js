// TASK MANAGER EXERCISE

// For displaying a prompt
let displayTasks = true;


// Displays the Task Manager at first startup
displayTasks = prompt(`TASK MANAGER \n
What would you like to do (Please enter one of the options below): 
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager\n`);

// Shows tasks
let tasks = "TASKS";
// Create a new task
let newTask = "NEW";
// Remove a task
let removeTask = "REMOVE";
// Close the task manager
let closeTask = "CLOSE";

// Getting the user's input
while (true){
    
    if (displayTasks == tasks){
        displayTasks = alert(`${tasks}`);
        break;
    } else if (displayTasks === newTask){
        newTask = prompt(`Please enter a new task:`);
        newTask = alert(`${newTask} has been added!`);
        newTask++;
        break;
    } else if (displayTasks === removeTask){
        removeTask = prompt(`Which task should you remove?:`);
        removeTask = alert(`${removeTask} has been removed.`);
        removeTask--;
        break;
    } else if  (displayTasks === closeTask){
        alert(`Thank you for using the Task Manager`);
        displayTasks = false;
        break;
    } else {
        displayTasks = true;
    }
} 