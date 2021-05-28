var input; 
var array;

function collectInput(newValues) {
    newValues = newValues.trim();
    input = newValues;
    document.getElementById("error").innerHTML="";
    document.getElementById("output").innerHTML=""; 
    createArray(); 
    sortNumbers();
}

function createArray() {
    array = input.split(/[, ]+/);
    var i = 0;
    while (i < array.length)
        {
            if(!Number.isInteger(parseInt(array[i]))){
                document.getElementById("error").innerHTML=document.getElementById("error").innerHTML.concat("<br>"+array[i]+" is not a valid input, so we're gonna delete the input");
                array.splice(i,1);
            }
            else {
                parseInt(array[i]);
                i++;
            }
        }
}

function sortNumbers () {
    array.sort(function(a,b){return a - b});
    var i;
    for (i=0;i<array.length;i++) {
        document.getElementById("output").innerHTML=document.getElementById("output").innerHTML.concat(array[i]+ " ");
    }
};


