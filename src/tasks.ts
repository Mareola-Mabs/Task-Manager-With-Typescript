const btn1 = document.querySelector<HTMLButtonElement>('.test-btn')! // btn.disabled = true // Works for specific properties

// btn1.addEventListener //Won't work, btn could be null or undefined

// btn1?.addEventListener // Works (best)

// if(btn1){} else{} // Using if statements to check also works

// const btn = document.querySelector('.test-btn')! // Using exclamation(non -null assertion) also works, but will crash at runtime if the element doesn't 

// Project Start
const btn:HTMLButtonElement = btn1 // Renaming for use
const taskForm = document.querySelector<HTMLFormElement>('form')!
const formInput = document.querySelector<HTMLInputElement>('.form-input')!
const taskListElement = document.querySelector<HTMLUListElement>('.list')!

type Task = {
    description: string,
    isCompleted: boolean
}

const tasks: Task[] = loadTasks()

tasks.forEach(item =>{
    renderTask(item)
})

function loadTasks(): Task[]{
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks? JSON.parse(storedTasks): []
}

// Testing with Callbacks
// function createTask(event: SubmitEvent){
//         event.preventDefault()

//     const taskDescription = formInput.value
//     if(taskDescription){
//         return formInput.value = ''
//     }
//     alert('Please enter a task description')
// }

// taskForm.addEventListener('submit', createTask)

taskForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const taskDescription = formInput.value
    if(taskDescription){
        const task: Task = {
                description: taskDescription,
                isCompleted: false
        }
        // Add task to List
        addTask(task)

        // Render tasks
        renderTask(task)

        // Update local storage
        updateStorage()

        return formInput.value = ''
    }
    alert('Please enter a task description')
})

function addTask(task: Task): void{
    tasks.push(task)
    console.log(tasks)
}


function renderTask(task: Task):void{
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description
    // CheckBox
    const taskCheckBox = document.createElement('input')
    taskCheckBox.type = 'checkbox'
    taskCheckBox.checked = task.isCompleted

    // Toggle Checkbox
    taskCheckBox.addEventListener('change', ()=>{
        task.isCompleted = !task.isCompleted
        updateStorage()
    })

    taskElement.appendChild(taskCheckBox)

    taskListElement.appendChild(taskElement)
}

function updateStorage():void{
    localStorage.setItem('tasks', JSON.stringify(tasks))
}