
let task = document.querySelector("#task");
let addbtn = document.querySelector(".addTask");
let ul = document.querySelector("#taskList");

addbtn.addEventListener("click", () => {
    if (task.value === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${task.value} <button class="delete">Del</button>`;

    ul.appendChild(li);
    task.value = "";
});

// DELETE using event delegation
ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});
