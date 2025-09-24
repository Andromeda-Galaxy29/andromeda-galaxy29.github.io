function main(){
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    
    D = Math.pow(b, 2) - (4 * a * c);
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        document.getElementById("output").innerHTML = "x1= "+String(x1)+", x2= "+String(x2);
    } else if (D == 0) {
        x=(-b / (2 * a));
        document.getElementById("output").innerHTML = "x= "+String(x);
    } else {
        document.getElementById("output").innerHTML = "Нет корней";
    }
}