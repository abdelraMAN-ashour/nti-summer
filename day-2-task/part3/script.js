const p=document.querySelector("#PAR");
function ChangeFont(type){
    p.style.fontFamily=type;
}

function ChangeAlign(type){
    p.style.textAlign=type;
}

function ChangeHeight(type){
    p.style.lineHeight=type;
}

function ChangeLSpace(type){
    p.style.letterSpacing=type;
}

function ChangeIndent(type){
    p.style.textIndent=type;
}

function ChangeTransform(type){
    p.style.textTransform=type;
}

function ChangeDecorate(type){
    p.style.textDecoration=type;
}

function ChangeBorder(type){
    p.style.borderStyle=type;
}

function ChangeBorderColor(type){
    p.style.border=p.style.borderStyle+" "+type;
}

