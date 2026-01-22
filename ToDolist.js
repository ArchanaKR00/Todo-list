const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }
// create li
  const li = document.createElement("li");
  li.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "bg-gray-800",
    "p-3",
    "rounded-md",
    "mb-3");


// create task list 
const span= document.createElement("span");
  span.textContent = task;
  span.classList.add("text-blue-400", "text-lg");



//button container

const btnDiv = document.createElement("div");
  btnDiv.classList.add("flex","gap-3",);


   

//create edit button
const editButton=document.createElement("button")
editButton.textContent="Edit"
editButton.classList.add("bg-yellow-500","px-5","rounded-md","text-sm")





editButton.addEventListener("click",()=>{
  let newTask=prompt("Edit task",span.textContent)
  if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask;
    }
})


//create delete button
const deleteButton=document.createElement("button")
deleteButton.textContent="Delete"
deleteButton.classList.add("bg-red-500","px-5","text-white","rounded-md" ,"text-sm",)





 

// delete functionality

deleteButton.addEventListener("click",()=>{
    li.remove()
})
btnDiv.append(editButton, deleteButton)

 li.append(span,btnDiv);

// append li to ul
  ul.appendChild(li);

//clear the input field
input.value = ""  

})


  




