function handleMouseOver() {
    var id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "royalblue";
    id2Element.style.color = "yellow";

    id2Element.innerHTML = "Hello Element Selector!!";
}

function handleMouseOut() {
    let id2Element = document.querySelector("div").children[0];
    id2Element.style.background = "black";
    id2Element.style.color = "white";

    id2Element.innerHTML = " Hiii there!!!";
}