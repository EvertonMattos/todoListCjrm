const addTodoForm = document.querySelector('.form-add-todo')
const todoContainerLis =  document.querySelector('.todos-container')
const searchInput =  document.querySelector('.form-search input')

const todoadd = inputValue=>{
  if(inputValue.length){
    todoContainerLis.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center"
    data-todo="${inputValue}">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt " data-trash="${inputValue}"></i>
  </li>`
  }
  event.target.reset()
}

const removeTodo= (clickedElements)=>{
  const isDataSetTrash = clickedElements.dataset.trash
  const todo = document.querySelector(`[data-todo="${isDataSetTrash}"]`)
  if(isDataSetTrash){
    todo.remove()
  }
}
const hiddenTodo = (todos,inputValue)=>{
  const todosToHidden = filterTodos(todos,inputValue,false)
  manipulateClasses(todosToHidden,'hidden','d-flex')
}
const showTodo = (todos,inputValue)=>{
 const todoToShow =  filterTodos(todos,inputValue,true)
   manipulateClasses(todoToShow,'d-flex','hidden')
}
const filterTodos= (todos,inputValue,returnMatchedTodos)=>{
  return todos
  .filter(todo=>{
    const matchedTodos = todo.textContent.toLowerCase().includes(inputValue)
    return returnMatchedTodos ? matchedTodos : !matchedTodos
  })
  }
const manipulateClasses = (todos,classAdd,classRemove)=>{
  todos.forEach(todo=>{
    todo.classList.remove(classRemove)
    todo.classList.add(classAdd)
  })
}
addTodoForm.addEventListener('submit',event=>{
  event.preventDefault()
  const inputValue = event.target.add.value.trim()
  todoadd(inputValue)
})

todoContainerLis.addEventListener('click',event=>{
const clickedElements = event.target

removeTodo(clickedElements)
})



searchInput.addEventListener('input',event=>{
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todoContainerLis.children)

  hiddenTodo(todos,inputValue)
  showTodo(todos,inputValue)
 
})