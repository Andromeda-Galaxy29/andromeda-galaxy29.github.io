x1 = prompt("Введите первое число");
x2 = prompt("Введите второе число");
x3 = prompt("Введите третее число");

c = Math.max(x1, x2, x3);
if (c == x1){
    a = x2;
    b = x3
}else if (c == x2){
    a = x1;
    b = x3
}else if (c == x3){
    a = x2;
    b = x1
}

alert(Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2));