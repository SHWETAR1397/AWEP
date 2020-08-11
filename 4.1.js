let counter = 1;
function increment() {
    let element = document.querySelector("#counterid");
    counter = counter + 1;
    element.innerHTML = counter;
}

function decrement() {
    let element = document.querySelector("#counterid");
    counter = counter - 1;
    element.innerHTML = counter;
}