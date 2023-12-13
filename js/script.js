// seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todolist = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
// funções 
const saveTodo = (text) =>{
    const todo = document.createElement('div');
    todo.classList.add('todo');
    const todoTittle = document.createElement('h3');
    todoTittle.innerHTML = text;
    todo.appendChild(todoTittle);

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(doneBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todolist.appendChild(todo)
    todoInput.value = ''
    todoInput.focus()
}
// eventos

todoForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const inputValue = todoInput.value
    if(inputValue){
        saveTodo(inputValue)
        
    }
});

document.addEventListener('click', (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest('div')
    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done')
    }

    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove()
    }

    if(targetEl.classList.contains('edit-todo')){
        console.log('editou')
    }

})