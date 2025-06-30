document.addEventListener("keydown",function(e){
    switch(e.key.charCodeAt(0)){
        case 83:
            alert("ascii is: "+e.key.charCodeAt(0)+" and it is Shift");
            break;
        case 65:
            alert("ascii is: "+e.key.charCodeAt(0)+" and it is ALT");
            break;
        case 67:
            alert("ascii is: "+e.key.charCodeAt(0)+" and it is Ctrl");
            break;
        default:
            alert("ascii is: "+e.key.charCodeAt(0));
    }
})