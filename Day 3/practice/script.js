let input = document.getElementById("nameInput");
let greetBtn = document.getElementById("greetBtn");
let colorBtn = document.getElementById("colorBtn");
let clearBtn = document.getElementById("clearBtn");
let greeting = document.getElementById("greeting");

greetBtn.addEventListener("click", function() {
    let name = input.value.trim()
    if (name !== "") {
        greeting.innerText = "Xin chào, " + name + "!"
    } else {
        greeting.innerText = "Vui lòng nhập tên của bạn."
    }
})

colorBtn.addEventListener("click", function() {
    greeting.classList.toggle("highlight");
})

clearBtn.addEventListener("click", function() {
    greeting.innerText = "";
})