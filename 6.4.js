
let likecounter = 1;




function comment() {
    let usercomment = document.querySelector("#inputId").value;

    //cloning the entire parent element withiut using createElement

    let element = document.querySelector("#refId").cloneNode(true);

    //since all the new element will have same id so remove ids 
    element.removeAttribute("id");
    element.style.visibility = "visible";
    element.children[0].innerHTML = usercomment;

    //commentbox element
    let commentbox = document.querySelector("#commentId");
    commentbox.insertBefore(element, commentbox.firstchild);

    //clean the comment box
    document.querySelector("#inputId").value = "";
}


function like() {
    likecounter++;

    let btnEle = document.querySelector("#likeId");
    btnEle.innerHTML = "LIKE " + likecounter;
}


//delete any comment
function deleteC(btnEle) {
    btnEle.parentElement.remove();
}




