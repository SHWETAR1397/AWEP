
let likecounter = 1;

function like() {
    likecounter++;
    document.querySelector("#likeId").innerHTML = "LIKE " + likecounter;
}


function comment() {
    let usercomment = document.querySelector("#inputId").value;


    let element = document.createElement("div");
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
    element.style.margin = "8px";

    element.style.backgroundColor = "yellow";
    element.style.color = "royalblue";
    element.style.margin = "2px";

    //creating children od parent div
    let child1 = document.createElement("div");
    child1.textContent = usercomment;

    let child2 = document.createElement("button");
    child2.textContent = "DELETE";

    element.appendChild(child1);
    element.appendChild(child2);

    let commentbox = document.querySelector("#commentId")
    commentbox.insertBefore(element, commentbox.firstChild);

    document.querySelector("#inputId").value = "";
}