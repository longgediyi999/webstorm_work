let inputs = document.querySelectorAll('input');

let btn = document.querySelector('button')


btn.onclick = function () {
    let n1 = inputs[0].value - 0;
    let n2 = inputs[1].value - 0;

    let sum = cal.add(n1,n2);
    inputs[2].value = sum;

}