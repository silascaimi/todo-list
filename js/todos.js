var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [];

function renderTodos(){
    listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+pos+')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

buttonElement.onclick = function addTodo(){
    if (inputElement.value != ''){
        todos.push(inputElement.value);
    }

    inputElement.value = '';

    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}