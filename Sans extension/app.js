// Récupération des éléments de base du formulaire
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");

// Ajout d'un event listener sur le bouton 'submit' du formulaire pour déclencher la fonction addTodo lorsqu'il est utilisé.
todoForm.addEventListener("submit", addTodo);

function addTodo(e) {

  if (todoInput.value === "") {
    // Tremblement du formulaire pour indiquer une erreur
    todoForm.classList.toggle("shake-horizontal");
    setTimeout(() => {
      todoForm.classList.toggle("shake-horizontal");
    }, 500);
  } 
  else {

    // Item de la liste de tâche
    const li = document.createElement("li");
    li.classList.add("todo-collection__item");

    // Titre de la tâche
    const todoTitle = document.createElement("span");
    todoTitle.classList.add("todo-collection__item__title");
    todoTitle.innerText = todoInput.value;
  
    // Champ de texte 'editer'
    const editableInput = document.createElement("input");
    editableInput.classList.add("input");
    editableInput.classList.add("input--todo");
    editableInput.classList.add("hidden");
    editableInput.type = "text";
    editableInput.value = todoInput.value;

    // Bouton 'editer'
    const editButton = document.createElement("button");
    editButton.classList.add("button");
    editButton.classList.add("button--todo");
    editButton.classList.add("button--edit");
    editButton.innerText = "Editer";

    // Bouton 'sauvegarder'
    const saveButton = document.createElement("button");
    saveButton.classList.add("button");
    saveButton.classList.add("button--todo");
    saveButton.classList.add("button--save");
    saveButton.classList.add("hidden");
    saveButton.innerText = "Sauvegarder";

    // Bouton 'supprimer'
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button");
    deleteButton.classList.add("button--todo");
    deleteButton.classList.add("button--delete");
    deleteButton.innerText = "Supprimer";

    // Bouton 'supprimer'
    const notdoneButton = document.createElement("button");
    notdoneButton.classList.add("button");
    notdoneButton.classList.add("button--todo");
    notdoneButton.classList.add("button--notdone");
    notdoneButton.innerText = "Pas Effectué";

    // Ajout de tous les éléments créés dans la liste de tâches
    li.appendChild(todoTitle);
    li.appendChild(editableInput);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);
    li.appendChild(notdoneButton)

 
    // Ajout de l'item dans l'élément possédant la classe .todo-collection
    todoCollection.appendChild(li);
   
    function toggleTodoEditForm() {
      todoTitle.classList.toggle("hidden");
      editableInput.classList.toggle("hidden");
      editButton.classList.toggle("hidden");
      saveButton.classList.toggle("hidden");
    }

    // Ajout des différents listeners sur les boutons
    editButton.addEventListener("click", () => {
      toggleTodoEditForm();
      editableInput.focus();
    });

    saveButton.addEventListener("click", () => {
      todoTitle.innerText = editableInput.value;
      toggleTodoEditForm();
    });

    deleteButton.addEventListener("click", () => {
      setTimeout(() => {
        todoCollection.removeChild(li);
      }, 100);
    });

    notdoneButton.addEventListener("click", () =>{
      if (notdoneButton.innerText === "Pas Effectué") {
        notdoneButton.innerText = "Effectué"
        todoTitle.className = "todo-collection__item__title_sur"
      } else {
        notdoneButton.innerText = "Pas Effectué";
        todoTitle.className = "todo-collection__item__title"
      }
    })
  }

  // Vide le texte du champ de recherche  
  todoInput.value = "";
  todoInput.placeholder= "";

  /* Pernmet d'empêcher le comportement par défaut du formulaire (c'est-à-dire d'envoyer 
  les données du formulaire lorsque l'utilisateur clique sur le bouton 'submit') */
  e.preventDefault();
}




