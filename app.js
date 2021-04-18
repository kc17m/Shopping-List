// reference to addForm

const addTodo = document.querySelector(".add");
const todoList = document.querySelector(".todos");

//add event listener für Submit
//prevent default
//dann wollen wir grabben, was der user eingibt über const todoText = addTodo.add.value
//mit .trim() verhindern wir Übermittlung ungewollter Leerzeichen in der Eingabe
//neues todo als list item hinzufügen
//dafür schreiben wir eine function, praktisch, weil wiederverwertbar
//in unserem Fall: generateTemplate
//wir kopieren den HTML-Listentext eines Elements als TEMPLATE String in eine
//neue Const itemNew
//die wird dann als innerHTML zur TodoList hinzugefügt
//diese function rufen wir unten mit todo auf
//dann setzen wir die Eingabe zurück mit reverse()

const generateTemplate = todoText => {

    const itemNew = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todoText}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    todoList.innerHTML += itemNew;
};

addTodo.addEventListener("submit", e => {
    
    e.preventDefault();
    const todoText = addTodo.add.value.trim();
    //nur als test: console.log(todo);
    if (todoText.length) {
    generateTemplate(todoText);
}
    addTodo.reset();

});

//delete todos
todoList.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    } 

});

//sidekick
//recursion

// function reverse(str) {
//     let temp = 0;
//     let len = str.length ;
    

//     if (len === 0) {
//         return str[0];
//     }

//     else {
//         len--;
//         return (reverse(str.substr(1) + str[0]));
        
//     }
    
// }


// console.log(reverse("Leben"));