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
        case "a":
            return "d";
            break;
        case "b":
            return "a";
            break;
        case "c":
            return "k";
            break;
        case "d":
            return "f";
            break;
        case "e":
            return "4";
            break;
        case "f":
            return "h";
            break;
        case "g":
            return "8";
            break;
        case "h":
            return "f";
            break;
        case "i":
            return "g";
            break;
        case "j":
            return "9";
            break;
        case "k":
            return "-";
            break;
        case "l":
            return "t";
            break;
        case "m":
            return "1";
            break;
        case "n":
            return "3";
            break;
        case "o":
            return "2";
            break;
        case "p":
            return "i";
            break;
        case "q":
            return "7";
            break;
        case "r":
            return "l";
            break;
        case "s":
            return "i";
            break;
        case "t":
            return "z";
            break;
        case "u":
            return "w";
            break;
        case "v":
            return "+";
            break;
        case "w":
            return "-"
            break;
        case "x":
            return "5";
            break;
        case "y":
            return "p";
            break;
        case "z":
            return "h";
            break;

    }
}
function dec(x){
    switch(x){
        case "a":
            return "d";
            break;
        case "b":
            return "a";
            break;
        case "c":
            return "k";
            break;
        case "d":
            return "f";
            break;
        case "e":
            return "4";
            break;
        case "f":
            return "h";
            break;
        case "g":
            return "8";
            break;
        case "h":
            return "f";
            break;
        case "i":
            return "g";
            break;
        case "j":
            return "9";
            break;
        case "k":
            return "-";
            break;
        case "l":
            return "t";
            break;
        case "m":
            return "1";
            break;
        case "n":
            return "3";
            break;
        case "o":
            return "2";
            break;
        case "p":
            return "i";
            break;
        case "q":
            return "7";
            break;
        case "r":
            return "l";
            break;
        case "s":
            return "i";
            break;
        case "t":
            return "z";
            break;
        case "u":
            return "w";
            break;
        case "v":
            return "+";
            break;
        case "w":
            return "-"
            break;
        case "x":
            return "5";
            break;
        case "y":
            return "p";
            break;
        case "z":
            return "h";
            break;
    }
}