let clike = 0
//like
function like() {
    clike++;
    document.querySelector("#btn2").innerHTML = "LIKE " + clike;
}

//dislike
var cdislike = 0
function dislike() {
    //icrease dislike nd decrease like-->
    if (cdislike++) {
        clike--;
        document.querySelector("#btn2").innerHTML = "LIKE " + clike;
    } else {

    }
    document.querySelector("#btn3").innerHTML = "DISLIKE " + cdislike;
}
//commentlike
clike1 = 0
function like1() {
    clike1++;
    document.querySelector("#btn4").innerHTML = "LIKE " + clike1;
}

//commentdislike
var cdislike1 = 0
function dislike1() {
    //icrease dislike nd decrease like-->
    if (cdislike1++) {
        clike1--;
        document.querySelector("#btn4").innerHTML = "LIKE " + clike1;
    } else {

    }
    document.querySelector("#btn5").innerHTML = "DISLIKE " + cdislike1;
}

//input comment
function comment() {
    let usercomment = document.querySelector("#inputid1").value;

    //cloning
    let newdiv = document.querySelector("#cloneid").cloneNode(true);
    newdiv.children[0].children[0].children[1].innerHTML = usercomment;

    let maincomment = document.querySelector("#id2");

    maincomment.appendchild(newdiv);
}




