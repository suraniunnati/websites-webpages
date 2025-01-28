function cal(a) {
    document.getElementById("main").value += a;

}
function can() {
    document.getElementById("main").value = "";
}
function del() {
    let display = document.getElementById("main");
    display.value = display.value.slice(0, -1);
}
function calc() {
    let a = document.getElementById("main").value;

    document.getElementById("main").value = eval(a)
}

