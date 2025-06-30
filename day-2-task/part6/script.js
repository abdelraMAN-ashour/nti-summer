const eye=document.querySelector("img");
const ps=document.querySelector("#pass");
eye.addEventListener("click",function(){
    if(this.src.includes("s1")){
        this.src=this.src.replace("s1",'s2');
        ps.type="text";
    }
    else{
    this.src=this.src.replace("s2",'s1');
        ps.type="password";
    }
});