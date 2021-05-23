function encrypt(){
    var rawtext = document.getElementById("myinput").value;
    var temptext = "";
    for(i = 0; i < rawtext.length; i++){
        temptext += enc(rawtext[i]);
    }
    document.getElementById("result").innerHTML = temptext;
}
function decrypt(){
    var rawtext = document.getElementById("myinput").value;
    var temptext = "";
    for(i = 0; i < rawtext.length; i++){
        temptext += dec(rawtext[i]);
    }
    document.getElementById("result").innerHTML = temptext;
}
function enc(x){
    switch(x){
        case "a" :
            return ".";
            break;
        case "b" :
            return "0";
            break;
        case "c" :
            return "_";
            break;
        case "d" :
            return "=";
            break;
    }
}
function dec(x){
    switch(x){
        case "." :
            return "a";
            break;
        case "0" :
            return "b";
            break;
        case  "_":
            return "c";
            break;
        case  "=":
            return "d";
            break;
    }
}