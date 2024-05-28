window.onload = function() {
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", function() {
        if (todoInput.value != "") addTodoList();
    });
}

function addTodoList() {
    console.log(todoInput.value);

    const listArea = document.querySelector(".listArea");
    // createElement로 한 이유 편집쉽게 하려고
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    // 마음대로 수정할수있는 텍스트로 
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    // 리스트의 자식 노드
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    // 
    todoText.innerText = todoInput.value;
    // 텍스,트 입력하면 초기화
    todoInput.value = "";
    // 삭제 버튼
    delBtn.innerText = "X"

    // 버튼 클래스
    checkBtn.classList.add("checkBtn");
    // 텍스트 클래스
    todoText.classList.add("todoText");
    //  버튼 클래스 (다 수정 쉽게 하려고)
    delBtn.classList.add("delBtn");

    // 체크 버튼에도 이벤트 리스너, 다시 누르면 체크 해제까지 해야지
    checkBtn.addEventListener("click", function() {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        }
        else {
            checkBtn.innerHTML = "";
        }
        // 체크라는 클래스에있다.(css에서) 이게 활성화되면 찍찍이 생김
        todoText.classList.toggle("check");
    })

    // 이벤트 핸들러를 붙일때 이미 li노드가 있어서 핸들러가 붙어있는 노드만 지움
    delBtn.addEventListener("click", function() {
        liNode.remove();
    })

    console.log(listArea.lastChild);
}