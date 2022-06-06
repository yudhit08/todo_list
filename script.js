const deleteTask = document.querySelector('.box img#delete')

const addTodo = document.querySelector('.todo')

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const cardTask = document.querySelector('.card')
    const addBtn = document.querySelector('#add-task-btn')

    addBtn.addEventListener('click', submitTask)

    form.addEventListener('submit', submitTask)

    function submitTask(e) {
        e.preventDefault()

        const task = input.value

        if (!task) {
            alert("Tolong isi task ya...")
            return
        } else {
            console.log('naice')
        }

        const boxTask = document.createElement('div')
        boxTask.classList.add('box')

        const task_content_el = document.createElement('div')
        task_content_el.classList.add('todo')

        boxTask.appendChild(task_content_el)

        const task_input = document.createElement('input')
        task_input.classList.add('todo')
        task_input.type = 'text'
        task_input.value = task
        task_input.setAttribute('readonly', 'readonly')

        task_content_el.appendChild(task_input)

        const task_action = document.createElement('div')
        task_action.classList.add('action')

        boxTask.appendChild(task_action)

        // const editTask = document.createElement('img')
        // editTask.src = 'pen.png'
        // editTask.classList.add('edit')
        // task_action.appendChild(editTask)

        const deleteTask = document.createElement('img')
        deleteTask.src = 'icon/close.png'
        deleteTask.classList.add('delete')
        task_action.appendChild(deleteTask)

        // const saveEdit = document.createElement('img')
        // saveEdit.src = 'floppy-disk.png'
        // saveEdit.classList.add('save')
        // saveEdit.style.display = 'none'
        // task_action.appendChild(saveEdit)

        input.value = ''

        cardTask.appendChild(boxTask)

        // if (!saveEdit.classList.contains('save')) {
        //     editTask.addEventListener('click', () => {
        //         task_input.removeAttribute('readonly')
        //         task_input.focus()
        //         editTask.classList.remove('edit')
        //         saveEdit.classList.add('save')
        //         saveEdit.style.display = 'block'
        //         editTask.style.display = 'none'
        //     })
        // } else {
        //     saveEdit.addEventListener('click', () => {
        //         task_input.setAttribute('readonly')
        //         saveEdit.classList.remove('save')
        //         editTask.classList.add('edit')
        //         saveEdit.style.display = 'none'
        //         editTask.style.display = 'block'
        //     })
        // }

        deleteTask.addEventListener('click', () => {
            cardTask.removeChild(boxTask)
        })
    }
})





// deleteTask.addEventListener('click', function(){
//     cardTask.classList.remove('box')
//     cardTask.parentNode.removeChild(box)
// })

// inputTask.addEventListener('keypress', function(event){
//     if (event.key === 'Enter') {
//         event.preventDefault()
//         document.getElementById('add-task-btn').click()
//         addList()
//     }
// })

// addTaskBtn.addEventListener('click', addList)

// function addList()
// {
//     addTodo.innerText = inputTask.value
// }