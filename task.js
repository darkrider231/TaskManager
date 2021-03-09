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
let tasks;
// Create a new task
let newTask;
// Remove a task
let removeTask;
// Close the task manager
let closeTask;

// Getting the user's input
while (true){
    
    if (displayTasks === "TASKS"){
        displayTasks = alert(`${newTasks}`);
        displayTasks = true;
    } else if (displayTasks === "NEW"){
        newTask = prompt(`Please enter a new task:`);
        newTask = alert(`${newTask} has been added!`);
        newTask++;
        displayTasks = true;       
    } else if (displayTasks === "REMOVE"){
        removeTask = prompt(`Which task should you remove?:`);
        removeTask = alert(`${removeTask} has been removed.`);
        removeTask--;
        displayTasks = true;
    } else if  (displayTasks === "CLOSE"){
        alert(`Thank you for using the Task Manager`);
        break;
    } else {
        displayTasks = prompt(`TASK MANAGER \n
        What would you like to do (Please enter one of the options below): 
        "TASKS" - Display All Tasks
        "NEW" - Add A New Task
        "REMOVE" - Remove A Task
        "CLOSE" - Close The Task Manager\n`);
    }
} 