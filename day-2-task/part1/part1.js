const div=document.querySelector("div");
div.addEventListener("click",function(){
    const clone=this.cloneNode(true);
    clone.style.backgroundColor='blue';
    document.body.appendChild(clone);
})