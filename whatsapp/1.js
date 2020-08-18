let usermessage = document.getElementById("inputbox")
let chatscreen = document.getElementById("chatbox")

function displayMessage() {
    var textDate = Date().split(' GMT')[0];
    let grandparent = document.createElement("div")

    let parentdiv = document.createElement("div");
    parent.setAttribute("id", "#chatbox");

    let child1 = document.createElement("p");
    child1.setAttribute("class", "para1");
    child1.innerText = usermessage.value

    let child2 = document.createElement("p");
    child2.setAttribute("class", "para2");
    child2.innertext = textDate;

    parent.appendchild(child1);
    parent.appendchild(child2);

    parent.appendChild(parent).children[0].children[1]


    chatscreen.appendchild(parent);



}