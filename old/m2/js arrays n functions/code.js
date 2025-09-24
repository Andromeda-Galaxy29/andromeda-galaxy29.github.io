function printNumbers(){
    n = parseInt(document.getElementById("input").value);
    array = [];

    for (i = 1; i<=n; i++){
        array[i-1] = i;
    }
    document.getElementById("output").innerHTML=String(array);
}

function pushArrayRandom(array){
    for(i = 0; i<array.length; i++){
        array[i] = parseInt(Math.random()*100-50)
    }
    return array
}

function isEven(num){
    return num%2==0
}

function showArrayToConsole(array){
    console.log(array)
}

function showArrayToDocument(array){
    document.getElementById("output").innerHTML=String(array);
}

function amountEvenInArray(array){
    counter = 0
    for(i = 0; i<array.length; i++){
        if(isEven(array[i])){
            counter++
        }
    }
    return counter
}

function main(){
    n = parseInt(document.getElementById("input").value);
    array = Array.apply(null, Array(n))
    pushArrayRandom(array)
    console.log(amountEvenInArray(array))
    if (amountEvenInArray(array) < 20){
        showArrayToConsole(array)
    }else{
        showArrayToDocument(array)
    }
}