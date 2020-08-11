let commentcounter = 1;
let likecounter = 1;

function like() {
    likecounter++;
    document.querySelector("#likeId").innerHTML = "LIKE " + likecounter;
}

function comment() {
    //create new div ele to show each comment
    let newelement = document.createElement("div");
    //content of the comment-box
    newelement.textContent = "comment" + commentcounter;

    //styling of commentbox
    newelement.style.backgroundColor = "pink";
    newelement.style.margin = "4px";

    //appending new commentbox to the parent div
    let commentbox = document.querySelector("#commentId");
    commentbox.appendChild(newelement);

    commentcounter++;


}